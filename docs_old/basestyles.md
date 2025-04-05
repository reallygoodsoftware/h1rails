Base styles is still in early development. During this time, rather than having developers fork the base css file, the best way is to load the file from a single place, and have an additional file for overrides. 

```
<link href="https://tonic-rails.toniclabs.ltd/base-styles/0.0.1.css<%= cache_buster %>" rel="stylesheet">
<link href="/stylesheets/base-styles-overrides.css<%= cache_buster %>" rel="stylesheet">
```