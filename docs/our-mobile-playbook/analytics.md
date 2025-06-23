---
icon: circle-small
---

# Analytics

> We don't yet have a go-to Analytics tool for mobile tracking, but we do have an approach.

I've helped implement many analytics tools over the years - some of my learnings:

* The tool can change quite often over time, but the underlying idea (identifying users and capturing events) will remain the same - so a simple abstraction that can capture an event but can swap out providers is a good idea. Using something like [Segment](https://segment.com/) for this is way more trouble than it's worth - the SDK is not flexible enough to do the things you often want to do, and the cost often ends up being exorbitant. Given this is one, maybe 2 functions, we're better to set this up ourselves.
* "Auto Capture" solutions don't work nearly as well as they claim to. For example:
  * Our apps use a combination of React Native and Webviews.
  * Some of those webviews load new pages in async, which can break/duplicate auto-firing events.
  * Several of our screens are also handled by external providers (E.g. Superwall), and we can't easily capture what happens there.&#x20;
  * Autocapture doesn't have a good solution for identifying specific buttons, so you end with random strings and ids in your analytics that are undecipherable

## Our Approach

### Implement a service that can id a user and send an event on their behalf

```javascript
// analytics.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import * as Application from 'expo-application';
import { Platform } from 'react-native';
import { Mixpanel } from 'mixpanel-react-native';

const mixpanel = new Mixpanel(process.env.EXPO_PUBLIC_MIXPANEL_TOKEN,false);

class Analytics {
  constructor() {
    this.masterId = null;
    this.initialize();
  }

  async initialize() {
    this.masterId = await this.getOrCreateMasterId();
    await mixpanel.init();
  }

  async getOrCreateMasterId() {
    try {
      let masterId = await AsyncStorage.getItem('analytics_master_id');
      if (!masterId) {
        // Use platform-specific device ID methods
        if (Platform.OS === 'ios') {
          masterId = await Application.getIosIdForVendorAsync();
        } else if (Platform.OS === 'android') {
          masterId = await Application.getAndroidIdAsync();
        } else {
          // Fallback for web or other platforms
          masterId = Application.androidId || Application.applicationId || 'unknown';
        }
        await AsyncStorage.setItem('analytics_master_id', masterId);
      }
      return masterId;
    } catch (error) {
      console.error('Analytics initialization error:', error);
      return 'unknown';
    }
  }

  async getAuthData() {
    try {
      const userData = await SecureStore.getItem('userData');
      
      if (userData) {
        const user = JSON.parse(userData);
        return {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name
        };
      }
      return { email: null, first_name: null, last_name: null };
    } catch (error) {
      return { email: null, first_name: null, last_name: null };
    }
  }

  async track(eventName, properties = {}) {
    if (!this.masterId) {
      await this.initialize();
    }

    // Get current user data
    const { email, first_name, last_name } = await this.getAuthData();
  
    this.sendMixpanelEvent(eventName, properties, { email, first_name, last_name });
  }

  async sendMixpanelEvent(eventName, properties, userData) {
    const eventProperties = {
      ...properties,
      environment: process.env.EXPO_PUBLIC_ENVIRONMENT,
      user_id: this.masterId
    };

    // Identify user in Mixpanel
    if (userData.email) {
      mixpanel.identify(this.masterId);
      mixpanel.getPeople().set({
        $email: userData.email,
        $first_name: userData.first_name,
        $last_name: userData.last_name
      });
    }

    // Track the event
    mixpanel.track(eventName, eventProperties);
    console.log('Mixpanel event sent:', eventName, eventProperties);
  }

  // Method to get masterId for use in auth flows
  async getMasterId() {
    if (!this.masterId) {
      await this.initialize();
    }
    return this.masterId;
  }
}

export default new Analytics();
```



### Getting a user's masterID

```javascript
import analytics from '@/lib/analytics';
const masterId = await analytics.getMasterId();
```

### Tracking Events

<pre class="language-javascript"><code class="lang-javascript">analytics.track(`Screen Loaded`, {
<strong>    grouping: 'onboarding',
</strong>    section: currentScreen
})
</code></pre>
