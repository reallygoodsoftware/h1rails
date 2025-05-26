---
icon: circle-small
---

# Setting Up R2

The default H1 Rails codebase uses Cloudflare's R2 for storing files and attachments (with Active Storage). R2 is completely s3-compatible, meaning it follows all the Amazon s3 conventions. But Cloudflare has the advantage of having a much less complicated UI.

## Setup

* Open you Cloudflare account and click on the "R2 object storage" on the left menu. Go through the setup steps - give your bucket a name that corresponds to your project. For location choose the location that is likely to have more of your visitors/users.

### 1. R2 Endpoint

This follows the pattern: `https://<account-id>.r2.cloudflarestorage.com`

To find your account ID:

* Go to the Cloudflare dashboard
* Look at the right sidebar - your Account ID is displayed there
* Or check the URL when you're in your dashboard - it's the string after `/accounts/`



### 2. R2 Access Key ID & Secret Access Key

You'll need to create R2 API tokens:

* In Cloudflare dashboard, go to **R2 Object Storage**
* Click **API Dropdown** - **Manage  API Tokens**

<figure><img src="../../.gitbook/assets/CleanShot 2025-05-22 at 20.59.27@2x.png" alt=""><figcaption><p>Where to find API tokens</p></figcaption></figure>

* Click **Create An&#x20;**_**Account**_**&#x20;API Token**
* Use similar settings to these:

<figure><img src="../../.gitbook/assets/CleanShot 2025-05-22 at 21.02.43@2x.png" alt=""><figcaption></figcaption></figure>

* After creating, you'll see your credentials. **Copy them immediately as you won't see them again**

### 4. Bucket Name

This is simply the name of the R2 bucket you created (which you mentioned you've already set up).





