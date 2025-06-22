# Form Elements


## Text Field

<div class="element-demo">
  <div class="--frame py-12">
    <form class="ui-form">
      <label for="first_name">First Name</label>
      <input id="first_name" type="text" placeholder="First Name" />
    </form>
  </div>
</div>


## Select  

<div class="element-demo">
  <div class="--frame py-12">
    <form class="ui-form">
      <label for="select-example">Select</label>
      <select id="select-example">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </form>
  </div>
</div>

## Floating Label

<div class="element-demo">
  <div class="--frame py-12">
    <form class="ui-form">
      <div class="ui-floating-input">
        <input type="text" id="floating_example" placeholder=" " />
        <label for="floating_example">First Name</label>
      </div>
    </form>
  </div>
</div>

## Textarea

<div class="element-demo">
  <div class="--frame py-12">
    <form class="ui-form">  
      <textarea id="textarea_example" placeholder="Enter your message"></textarea>
    </form>
  </div>
</div>

## Switch

Unlike other elements, switches can be used both inside and outside of a `.ui-form`

<div class="element-demo">
  <div class="--frame py-12">
    <label class="ui-switch">
      <input type="checkbox" />
      <span class="--slider" ></span>
    </label>
  </div>
</div>

## Checkbox 

<div class="element-demo">
  <div class="--frame py-12">
    <label class="ui-checkbox">
      <input type="checkbox" />
      <span class="--checkbox" ></span>
    </label>
  </div>
</div>

## Date Picker 

<div class="element-demo">
  <div class="--frame py-12">
    <form class="ui-form">
      <label for="date_picker_example">Date Picker</label>  
      <input type="date" id="date_picker_example" onclick="this.showPicker()" />
    </form>
  </div>
</div>

## Date Time Picker

<div class="element-demo">
  <div class="--frame py-12">
    <form class="ui-form">
      <label for="date_time_picker_example">Date Time Picker</label>
      <input type="datetime-local" id="date_time_picker_example" onclick="this.showPicker()" />
    </form>
  </div>
</div>


## Color Picker

<div class="element-demo">
  <div class="--frame py-12">
    <form class="ui-form">
      <label for="color_picker_example">Color Picker</label>
      <input type="color" id="color_picker_example" value="#2c79b3" />
    </form>
  </div>
</div>

## Input Group

<div class="element-demo">
  <div class="--frame py-12">
    <form class="ui-form">
      <div class="ui-input-group">
        <input type="text" id="input_group_example" placeholder="First Name" />
        <input type="text" id="input_group_example" placeholder="Last Name" />
      </div>
    </form>
  </div>
</div>



## Full Form 
<div class="element-demo">
  <div class="--frame">
    <form class="ui-form py-12">
      <div class="flex flex-col gap-y-1">
        <div class="grid grid-cols-2 gap-x-4">
          <div>
            <label for="first_name">First Name</label>
            <input id="first_name" type="text" placeholder="First Name" />
          </div>
          <div>
            <label for="last_name">Last Name</label>
            <input id="last_name" type="text" placeholder="Last Name" />
          </div>
        </div>
        <div>
          <label for="select-example">Select</label>
          <select id="select-example">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div>
          <label for="options">Input Group</label>
          <div class="ui-input-group">
            <input id="first_name" type="text" placeholder="First Name" />
            <input id="middle_name" type="text" placeholder="Middle Name" />
            <input id="last_name" type="text" placeholder="Last Name" />
          </div>
        </div>
        <div> 
          <label>Floating Labels</label>
          <div class="grid grid-cols-2 gap-x-2">
            <div class="ui-floating-input mt-2">
              <input type="text" id="floating_example" placeholder=" " />
              <label for="floating_example">First Name</label>
            </div>
            <div class="ui-floating-input mt-2">
              <input type="text" id="floating_example" placeholder=" " />
              <label for="floating_example">Last Name</label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-6">
        <div>
          <a class="ui-button --minimal --motion-backward">
            <img src="/icons/heroicons/arrow-left.svg" />
            Back
          </a>
        </div>
        <div class="flex gap-x-2">
          <a class="ui-button --motion-forward">
            Save Draft
            <img src="/icons/heroicons/paper-airplane-outline.svg" />
          </a>
        </div>
      </div>
    </form>
  </div>
</div>