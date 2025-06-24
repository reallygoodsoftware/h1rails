# Code Review Guidelines

### Cases to look out for

* Not handling values that may return null or false
  * Solutions
    * Use the & operator to avoid an exception (in cases where you are handling no data in the UI).
    * Do a check for the object and return early if it doesn’t exist
* Inline `<style>` tags in files of type html or .html.erb
  * **Solution**: Move them into the relevant css file.
* Inline css on html elements - fine in rare cases but only if it’s a case where there is 1. No tailwind class, 2. No way to do it with base styles.
* Inline `<script>` tags in files of type html or .html.erb
* Sacrificing readability for “DRY-ness” in simple view code
  * For example it’s fine to “hard code” the markup of a top navigation as opposed to creating an array and looping through each item.
* Potential N+1 queries
  * This requires looking at the corresponding view for the controller, checking if any relationships are accessed in the view, and if they are, adding .includes to the controller.
* Code in the wrong place
  * Controllers should only handle auth, business logic & fetching data - nothing related to the view.
  * Helpers should handle business logic that's shared across views.&#x20;
  * Utilities (`/utils` folder) should handle functions that need to be accessible from more than one of controllers, models, views.
  * Basically no services or service objects. Long controller methods are fine and it's seldom to find cases where  models/utilities won't do the job.&#x20;
* Insufficient comments on long methods with multiple or unclear conditionals
  * We should use code comments liberally to explain code that’s not immediately obvio
