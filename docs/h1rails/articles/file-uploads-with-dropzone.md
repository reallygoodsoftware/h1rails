---
icon: circle-small
---

# File Uploads With Dropzone

## File uploads with Dropzone

We're currently using [Dropzone](https://www.dropzone.dev/) for file uploads. You should read [their documentation](https://docs.dropzone.dev/getting-started/setup/declarative) for more information.

#### Make sure the dropzone js and css files are being loaded

* In `/shared/partials/_head.html.erb`

```
<script src="/vendor/dropzone/5.9.3.min.js" ></script>
<link href="/vendor/dropzone/5.9.3.min.css" rel="stylesheet" media="screen" />
```

#### Set up initialization

We want to be able to easily add dropzones to different pages, and have them just work out of the box. This is made slightly less straightforward because we use HTMX. Because our content is often loaded in asynchronously, we need to have a way to 1. Apply dropzone behaviours to freshly injected html, and 2. Prevent re-initialization of the same dropzone multiple times. So we need to...

* Turn off Dropzone's auto discover feature
* Manually tell Dropzone to be discovered when a new page is loaded, either directly or asynchronously.

```
// public/custom.js
Dropzone.autoDiscover = false;

function reinitializeJs() { 
  Dropzone.discover();
}
```

* Make sure the function that discovers dropzones is triggered after an htmx request

```
document.addEventListener("htmx:afterSettle", function(event) {
  reinitializeJs();
});
```

#### Setup

* Dropzone's default mode of operation is to upload files _independently_ of the current form. I.e. the moment a user adds an image, the upload starts, as opposed to images being uploaded alongside the other information in the form. This means we'll need to set up a separate endpoint that's used only for the file upload.
* This is obviously imcompatible with cases where the form object hasn't yet been added to the database, but because our approach as per [Multi Step Form Flows](https://hypergist.io/tony/docs?file=server_for_state.md) is to persist the form object first, this should work fine.

First, create a div inside of our form with a class of `.dropdown` and give it an id.

```
<form>
  <div id="submissionPhotosDropzone" class="dropzone"></div>
</form>
```

Then, add some javascript to tell dropzone what url to use for this dropzone. Notice that the object after `options.` corresponds to the id of the input. This is how Dropzone identifies the dropzone you're configuring.

```
<form>
  <div id="submissionPhotosDropzone" class="dropzone"></div>
</form>
<script>
  Dropzone.options.submissionPhotosDropzone = {
    url: "<%= submission_upload_path(@submission.shortcode) %>"
  };
</script>
```

#### Add a controller action to handle the form

```
class OrderController < ApplicationController

  def upload_file
    @file = @order.attachments.new(
      file: params[:file]
    )
  end

end
```
