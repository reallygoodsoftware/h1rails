# Active Storage

---
<br/>

### **Add an attachment to a model**

```
class User < ApplicationRecord
  has_one_attached :avatar
end
```

### **Add an attachment to a model, support multiple**

```
class User < ApplicationRecord
  has_many_attached :files
end
```