---
icon: bolt-lightning
---

# Snappy Page Transitions

Broadly speaking there are three things that are present in SPAs but not in Vanilla Web Apps, that lead to the latter feeling clunky and the former feeling smooth - when users click on a link or submit a form.&#x20;

1. **Flash Of White**: Non SPA users see a temporary blank white screen while the request loads.
2. **No Partial Page Replacement**: Non SPA users the entire page is deleted, then replaced, which has various UX implications including causing the user to lose their scroll position.&#x20;
3. **Delayed Feedback**: Non SPA users don't see any immediate indication that their click was received, or form submission was sent, until the new page loads in.&#x20;
   1. On the clicked element
   2. On the target area



## Approaches

<table data-full-width="true"><thead><tr><th width="191.56640625"></th><th width="189.625">Chrome Paint Holding</th><th width="185.78125">View Transitions</th><th>External Libary</th><th>Triptych</th></tr></thead><tbody><tr><td>Flash of white</td><td>✅ Chrome users today won't see a flash of white if the new page loads within 500 milliseconds, but this isn't a platform-level feature</td><td>✅ View Transitions will solve the flash of white issue even for browsers without paint holding. </td><td>✅ <a href="https://htmx.org/">HTMX</a>, <a href="https://turbo.hotwired.dev/handbook/installing">Turbo</a>, <a href="https://unpoly.com/">Unpoly</a>, <a href="https://data-star.dev/">Datastar</a> and several others support this</td><td>✅ A set of <a href="https://alexanderpetros.com/triptych/">proposals</a> by Carson Gross and Alex Petros will address this.</td></tr><tr><td>Instant Feedback</td><td>❌ When a user clicks a link or submits a form, nothing will happen until the new page loads in. </td><td>❌ Even with multi document view transitions, we still have to wait for the new document before starting the transition animation</td><td>✅ <a href="https://htmx.org/">HTMX</a>, <a href="https://turbo.hotwired.dev/handbook/installing">Turbo</a>, <a href="https://unpoly.com/">Unpoly</a>, <a href="https://data-star.dev/">Datastar</a> and several others support this</td><td>✅ A set of <a href="https://alexanderpetros.com/triptych/">proposals</a> by Carson Gross and Alex Petros will address this.</td></tr><tr><td>Partial Page Replacement</td><td>❌ We can't tell the browser to only </td><td>✅ This is possible, but without instant feedback still feels slow.</td><td>✅ <a href="https://htmx.org/">HTMX</a>, <a href="https://turbo.hotwired.dev/handbook/installing">Turbo</a>, <a href="https://unpoly.com/">Unpoly</a>, <a href="https://data-star.dev/">Datastar</a> and several others support this</td><td>✅ A set of <a href="https://alexanderpetros.com/triptych/">proposals</a> by Carson Gross and Alex Petros will address this.</td></tr></tbody></table>





## Periods

### 2025

* **HTML**: Yes
* **CSS**: Yes
* **JS**: No
* **Build Step**: No

