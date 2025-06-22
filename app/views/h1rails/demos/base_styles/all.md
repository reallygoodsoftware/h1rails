## Buttons

Add the `.ui-button` class to links or buttons

<div class="element-demo">
  <div class="--frame space-x-2">
    <button class="ui-button">
      Button
    </button>
    <button class="ui-button --solid">
      Solid Button
    </button>
    <button class="ui-button --motion-forward">
      Button With Icon
      <img src="/icons/heroicons/arrow-right.svg" />
    </button>
    <button class="ui-button --minimal">
      Minimal Button
    </button>
  </div>
</div>


## Button Group

Use `.ui-button-group` to display buttons or links together.

<div class="element-demo">
  <div class="--frame">
    <div class="ui-button-group">
      <button>
        Option A
      </button>
      <button class="--active">
        Option B
      </button>
      <button>
        Option C
      </button>
    </div>
  </div>
</div>


## Forms

Add `.ui-form` to any form to make it look great.

<div class="element-demo">
  <div class="--frame py-10">
    <form class="ui-form ui-box">
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
      <div class="--bottom">
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
          <button type="submit" class="ui-button --solid --motion-forward" form="form1">
            Go
          </button>
        </div>
      </div>
    </form>
  </div>
</div>


## Dropdown

Use `.ui-dropdown` with an internal `.--trigger` and `.--drawer`. Add or remove `.--open` to show and hide the items.

<div class="element-demo">
  <div class="--frame" :scope="dropdownOpen=false">
    <div class="ui-dropdown" :class="scope.dropdownOpen ? '--open' : ''">
      <button class="--trigger" :click="scope.dropdownOpen=!scope.dropdownOpen">
        Click To Open
      </button>
      <div class="--drawer p-1">
        <a class="ui-button --minimal w-full">
          Google.com
        </a>
        <a class="ui-button --minimal w-full">
          Google.com
        </a>
        <a class="ui-button --minimal w-full">
          Google.com
        </a>
      </div>
    </div>
  </div>
</div>


## Combobox

Use `.ui-combobox` when you need more than a simple select or dropdown. Use Combobox.js for behaviour.

<div class="element-demo">
  <div class="--frame">
    <div class="ui-combobox">
      <input type="hidden" name="fruits" value="orange,apple" />
      <input type="text" class="--trigger" placeholder="Type to search..." />
      <span class="--counter">2</span>
      <div class="--drawer" role="listbox">
        <div class="--group">
          <div class="--group-label">Citrus Fruits</div>
          <button type="button" class="--item --selected --highlighted" role="option" aria-selected="true" data-value="orange">
            <span>Orange</span>
          </button>
          <button type="button" class="--item" role="option" aria-selected="false" data-value="lemon">
            <span>Lemon</span>
          </button>
          <button type="button" class="--item" role="option" aria-selected="false" data-value="lime">
            <span>Lime</span>
          </button>
          <button type="button" class="--item" role="option" aria-selected="false" data-value="grapefruit">
            <span>Grapefruit</span>
          </button>
        </div>
        <div class="--group">
          <div class="--group-label">Berries</div>
          <button type="button" class="--item" role="option" aria-selected="false" data-value="strawberry">
            <span>Strawberry</span>
          </button>
          <button type="button" class="--item" role="option" aria-selected="false" data-value="blueberry">
            <span>Blueberry</span>
          </button>
          <button type="button" class="--item" role="option" aria-selected="false" data-value="raspberry">
            <span>Raspberry</span>
          </button>
          <button type="button" class="--item" role="option" aria-selected="false" data-value="blackberry">
            <span>Blackberry</span>
          </button>
        </div>
        <div class="--group">
          <div class="--group-label">Tropical Fruits</div>
          <button type="button" class="--item" role="option" aria-selected="false" data-value="banana">
            <span>Banana</span>
          </button>
          <button type="button" class="--item" role="option" aria-selected="false" data-value="mango">
            <span>Mango</span>
          </button>
          <button type="button" class="--item" role="option" aria-selected="false" data-value="pineapple">
            <span>Pineapple</span>
          </button>
          <button type="button" class="--item" role="option" aria-selected="false" data-value="coconut">
            <span>Coconut</span>
          </button>
        </div>
        <div class="--ungrouped">
          <button type="button" class="--item --selected" role="option" aria-selected="true" data-value="apple">
            <span>Apple</span>
          </button>
          <button type="button" class="--item" role="option" aria-selected="false" data-value="pear">
            <span>Pear</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


## Tooltips

Tooltips are based on [hint.css](https://kushagra.dev/lab/hint/). Currently they don't support html content.

<div class="element-demo">

  <div class="--frame  space-x-4">
    <div >
      <a href="#" class="ui-tooltip--top underline" aria-label="Use the ui-tooltip--top class">
        Tooltip Top
      </a>
    </div>
    <div >
      <a href="#" class="ui-tooltip--right underline" aria-label="Use the ui-tooltip--right class">
        Tooltip Right
      </a>
    </div>
    <div >
      <a href="#" class="ui-tooltip--bottom underline" aria-label="Use the ui-tooltip--bottom class">
        Tooltip Bottom
      </a>
    </div>
    <div >
      <a href="#" class="ui-tooltip--left underline" aria-label="Use the ui-tooltip--left class">
        Tooltip Left
      </a>
    </div>
  </div>
</div>



## Tabnavs

Use `.ui-tabnav` to create simple tabs.

<div class="element-demo">

  <div class="--frame pb-8">
    <div class="ui-tabnav" :scope="activeTab='content'">
      <div :class="scope.activeTab =='content' ? 'active' : ''" class="active">
        <button :click="scope.activeTab='content'" >
          Content
        </button>
      </div>
      <div :class="scope.activeTab =='setup' ? 'active' : ''">
        <button :click="scope.activeTab='setup'">
          Setup
        </button>
      </div>
    </div>
  </div>

</div>


## Search Input

Search inputs are a simple way to search for content.

<div class="element-demo">
  <div class="--frame flex flex-col gap-y-4">
    <div >
      <input type="search" placeholder="Search..." class="ui-search-input w-3/4" />
    </div>
  </div>
</div>


## Modals

Modals are a simple way to display a modal.

<div class="element-demo">
  <div class="--frame">
    <div class="ui-styled-text-unset mb-4" :scope="modalOpen=false">
      <div class="ui-modal"  
          role="dialog" 
          aria-modal="true" 
          :click="if (event.target.className == '--wrapper-inner') {scope.modalOpen=false}"
          :class="scope.modalOpen ? '--visible' : '' "  >
        <div class="--overlay"></div>
        <div class="--wrapper-outer" >
          <div class="--wrapper-inner">
            <div id="modal-dialog" class="--dialog" >
              <div class="--close-button" :click="scope.modalOpen=false">
                <img src="/icons/heroicons/x-mark.svg" />
              </div>
              <div class="--modal-top-section">
                <div class="ui-titlepair --xl">
                  <h2 class="--title">
                    Your Modal Title
                  </h2>
                  <span class="--description">
                    Your Modal Description
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="ui-button --solid --motion-forward" :click="scope.modalOpen=true">
        Open Modal
      </button>
    </div>
  </div>
</div>


## Toasts

Toasts are a simple way to display a message to the user.
Use a javascript sprinkle to show the modal by simply adding a class of `.--visible` to the `.ui-modal`.

<div class="element-demo">
  <div class="--frame">
    <button class="ui-button --solid --motion-forward" 
          :click="document.getElementById('demo-toast').classList.add('--animate-in')">
      Trigger Toast
    </button>
    <div class="ui-toasts">
      <div class="--toast" id="demo-toast">
        <div class="--wrapper">
          <div class="--content">
            <div class="--close-button">
              <img src="/icons/heroicons/x-mark.svg" />
            </div>
            <span class="--title">
              Your Toast Title
            </span> 
            <span class="--message">
              Your Toast Message
            </span> 
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


## Eyebrow

Eyebrows are capitalised section headings.
<div class="element-demo">
  <div class="--frame">
    <div class="ui-eyebrow">Eyebrow</div>
  </div>
</div>

## Switch

Switches are a simple way to toggle a boolean value.

<div class="element-demo ui-styled-text-unset">
  <div class="flex items-center --frame">
    <label class="ui-switch">
      <input type="checkbox" />
      <span class="--slider" ></span>
    </label>
  </div>
</div>

## Chips

Chips are a simple way to display a list of tags.

<div class="element-demo">

  <div class="--frame space-x-3">
    <div class="ui-chip --sm">Default</div>
    <div class="ui-chip --sm --green">Green</div>
    <div class="ui-chip --sm --yellow">Yellow</div>
    <div class="ui-chip --sm --red">Red</div>
    <div class="ui-chip --sm --blue">Blue</div>
  </div>

</div>

## Titles

Titles are a simple way to display a title.

<div class="element-demo ui-styled-text-unset">
  <div class="--frame space-x-8 flex items-center">
    <h3 class="ui-title --xl">Coffee</h3>
    <h3 class="ui-title --lg">Coffee</h3>
    <h3 class="ui-title">Coffee</h3>
  </div>
</div>

## Title Pairs

Title pairs are a simple way to display a title and description.

<div class="element-demo ui-styled-text-unset">
  <div class="--frame space-x-8 flex items-center">
    <div class="ui-titlepair --xl">
      <h3 class="--title ">Coffee</h3>
      <p class="--description">Size: Xl</p>
    </div>
    <div class="ui-titlepair --lg">
      <h3 class="--title ">Coffee</h3>
      <p class="--description">Size: Lg</p>
    </div>
    <div class="ui-titlepair">
      <h3 class="--title ">Coffee</h3>
      <p class="--description">Default Size</p>
    </div>
  </div>
</div>



## Boxes

Boxes are a simple way to display content.

<div class="element-demo">
  <div class="--frame space-y-6 ui-styled-text-unset p-8">

    <div class="ui-box flex-grow">
      A simple box
    </div>

  </div>
</div>

## Expander

A simple way to animate the height of a content container.

<div class="element-demo">
  <div class="--frame flex-col">
    <a class="underline cursor-pointer" :click="document.getElementById('demo-expander').classList.toggle('--expanded')">
      Toggle Expander
    </a>
    <div class="ui-expander" id="demo-expander">
      <div>
        Content goes here
      </div>
    </div>
  </div>
</div>


## Shimmer

<div class="element-demo">

  <div class="--frame p-10">

    <div class="ui-shimmer">
      <div class="--circle"></div>
      <div class="--rect"></div>
      <div class="--rect --width-.75"></div>
      <div class="--rect --width-.5"></div>
      <div class="--rect --width-.25"></div>
    </div>
  </div>

</div>

## Styled Text

Wrap prose-like content in `.ui-styled-text` to get clean, pretty formatting.

<div class="element-demo">

  <div class="--frame py-10">
    <div class="ui-styled-text">
      <h1>This is a heading 1</h1>
      <p>This is a paragraph. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
      <h2>This is a heading 2</h2>
      <p>This is a paragraph. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
      <h3>This is a heading 3</h3>
      <p>This is a paragraph. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
      <ul>
        <li>This is a list item in a <code>ul</code>. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
          <ul>
            <li>This is a list item in a <code>ul</code>. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
            <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
            <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
          </ul>
        </li>
      </ul>
      <hr/>
      <ol>
        <li>This is a list item in a <code>ol</code>. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</li>
      </ol>
      <hr/>
      <blockquote>
        This is a blockquote. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
      </blockquote>
    </div>
  </div>
</div>

## Tables


<div class="element-demo">

  <div class="--frame p-10">
    <table id="table-example" class="ui-table ui-styled-text-unset" class="--bravo">
      <thead>
        <tr>
          <th><abbr title="Position">Pos</abbr></th>
          <th>Team</th>
          <th><abbr title="Played">Pld</abbr></th>
          <th><abbr title="Won">W</abbr></th>
          <th><abbr title="Drawn">D</abbr></th>
          <th><abbr title="Lost">L</abbr></th>
          <th><abbr title="Goals for">GF</abbr></th>
          <th><abbr title="Goals against">GA</abbr></th>
          <th><abbr title="Goal difference">GD</abbr></th>
          <th><abbr title="Points">Pts</abbr></th>
          <th>Notes</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <th>1</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
              title="Manchester United F.C."
              >Manchester United</a
            >
            <strong>(C)</strong>
          </td>
          <td>38</td>
          <td>28</td>
          <td>5</td>
          <td>5</td>
          <td>86</td>
          <td>43</td>
          <td>+43</td>
          <td>89</td>
          <td>
            Qualification for the
            <a
              href="https://en.wikipedia.org/wiki/2013%E2%80%9314_UEFA_Champions_League#Group_stage"
              title="2013–14 UEFA Champions League"
              >Champions League group stage</a
            >
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
              title="Manchester City F.C."
              >Manchester City</a
            >
          </td>
          <td>38</td>
          <td>23</td>
          <td>9</td>
          <td>6</td>
          <td>66</td>
          <td>34</td>
          <td>+32</td>
          <td>78</td>
          <td>
            Qualification for the
            <a
              href="https://en.wikipedia.org/wiki/2013%E2%80%9314_UEFA_Champions_League#Group_stage"
              title="2013–14 UEFA Champions League"
              >Champions League group stage</a
            >
          </td>
        </tr>
        <tr>
          <th>3</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Chelsea_F.C."
              title="Chelsea F.C."
              >Chelsea</a
            >
          </td>
          <td>38</td>
          <td>22</td>
          <td>9</td>
          <td>7</td>
          <td>75</td>
          <td>39</td>
          <td>+36</td>
          <td>75</td>
          <td>
            Qualification for the
            <a
              href="https://en.wikipedia.org/wiki/2013%E2%80%9314_UEFA_Champions_League#Group_stage"
              title="2013–14 UEFA Champions League"
              >Champions League group stage</a
            >
          </td>
        </tr>
        <tr>
          <th>4</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Arsenal_F.C."
              title="Arsenal F.C."
              >Arsenal</a
            >
          </td>
          <td>38</td>
          <td>21</td>
          <td>10</td>
          <td>7</td>
          <td>72</td>
          <td>37</td>
          <td>+35</td>
          <td>73</td>
          <td>
            Qualification for the
            <a
              href="https://en.wikipedia.org/wiki/2013%E2%80%9314_UEFA_Champions_League#Play-off_round"
              title="2013–14 UEFA Champions League"
              >Champions League play-off round</a
            >
          </td>
        </tr>
        <tr>
          <th>5</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
              title="Tottenham Hotspur F.C."
              >Tottenham Hotspur</a
            >
          </td>
          <td>38</td>
          <td>21</td>
          <td>9</td>
          <td>8</td>
          <td>66</td>
          <td>46</td>
          <td>+20</td>
          <td>72</td>
          <td>
            Qualification for the
            <a
              href="https://en.wikipedia.org/wiki/2013%E2%80%9314_UEFA_Europa_League#Group_stage"
              title="2013–14 UEFA Europa League"
              >Europa League group stage</a
            >
          </td>
        </tr>
        <tr>
          <th>6</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Everton_F.C."
              title="Everton F.C."
              >Everton</a
            >
          </td>
          <td>38</td>
          <td>16</td>
          <td>15</td>
          <td>7</td>
          <td>55</td>
          <td>40</td>
          <td>+15</td>
          <td>63</td>
          <td></td>
        </tr>
        <tr>
          <th>7</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Liverpool_F.C."
              title="Liverpool F.C."
              >Liverpool</a
            >
          </td>
          <td>38</td>
          <td>16</td>
          <td>13</td>
          <td>9</td>
          <td>71</td>
          <td>43</td>
          <td>+28</td>
          <td>61</td>
          <td></td>
        </tr>
        <tr>
          <th>8</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C."
              title="West Bromwich Albion F.C."
              >West Bromwich Albion</a
            >
          </td>
          <td>38</td>
          <td>14</td>
          <td>7</td>
          <td>17</td>
          <td>53</td>
          <td>57</td>
          <td>-4</td>
          <td>49</td>
          <td></td>
        </tr>
        <tr>
          <th>9</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C."
              title="Swansea City A.F.C."
              >Swansea City</a
            >
          </td>
          <td>38</td>
          <td>11</td>
          <td>13</td>
          <td>14</td>
          <td>47</td>
          <td>51</td>
          <td>-4</td>
          <td>46</td>
          <td></td>
        </tr>
        <tr>
          <th>10</th>
          <td>
            <a
              href="https://en.wikipedia.org/wiki/West_Ham_United_F.C."
              title="West Ham United F.C."
              >West Ham United</a
            >
          </td>
          <td>38</td>
          <td>12</td>
          <td>10</td>
          <td>16</td>
          <td>45</td>
          <td>53</td>
          <td>-8</td>
          <td>46</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>