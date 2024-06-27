# Dropdowns

These examples are based on the code in the [mini-js snippet library](https://vm.mini-js.com/recipes?list_id=1). You can modify color, styling and behaviour by just tweaking the code. 

### Simple html based dropdown


**Demo**

<div class="reset-format-text-styling mb-3">
  <div class="relative" :scope >
    <button class="gap-x-1 border bg-white border-gray-100 shadow w-full rounded px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center" :click="scope.showDropdown = !scope.showDropdown" >
      <span>
        Active Item
      </span>
      
      <div class="transition duration-100 ease-out" :class="scope.showDropdown ? 'rotate-180' : ''">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </button>
    <div class="relative">
      <div class="transition ease-out duration-100 shadow opacity-0 absolute top-0 right-0 left-0 " :class="scope.showDropdown ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95 pointer-events-none' " >
        <div class="mt-3 bg-white rounded p-2">
          <a class="rounded px-4 py-2 hover:bg-gray-100 cursor-pointer block" href="#" >
            Item One
          </a>
          <a class="rounded px-4 py-2 hover:bg-gray-100 cursor-pointer block" href="#" >
            Item Two
          </a>
        </div>
      </div>  
    </div>
  </div>
</div>


**Code**

```
<div class="relative" :scope >
  <button class="gap-x-1 border bg-white border-gray-100 shadow w-full rounded px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center" :click="scope.showDropdown = !scope.showDropdown" >
    <span>
      Active Item
    </span>
    
    <div class="transition duration-100 ease-out" :class="scope.showDropdown ? 'rotate-180' : ''">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </button>
  <div class="relative">
    <div class="transition ease-out duration-100 shadow opacity-0 absolute top-0 right-0 left-0 " :class="scope.showDropdown ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95 pointer-events-none' " >
      <div class="mt-3 bg-white rounded p-2">
        <a class="rounded px-4 py-2 hover:bg-gray-100 cursor-pointer block" href="#" >
          Item One
        </a>
        <a class="rounded px-4 py-2 hover:bg-gray-100 cursor-pointer block" href="#" >
          Item Two
        </a>
      </div>
    </div>  
  </div>
</div>
```
