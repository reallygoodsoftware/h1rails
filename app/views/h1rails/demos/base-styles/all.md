## Buttons

Add `.ui-button` to any element to stysle it like a button.

<div class="code-sample code-sample-inner flex gap-x-2 mb-4">
  <button class="ui-button">
    Button
  </button>
</div>

Add `.--solid` to give it a solid background or `.--minimal` to make it minimal.

<div class="code-sample code-sample-inner flex gap-x-2 mb-4">
  <button class="ui-button --solid ">
    Solid Button
  </button>
  <button class="ui-button --minimal ">
    Minimal Button
  </button>
</div>

Use `.--sm` and `.--xs` to resize your button.

<div class="code-sample code-sample-inner flex gap-x-2 items-center mb-4">
  <button class="ui-button">
    Button
  </button>
  <button class="ui-button --sm">
    Simple Button
  </button>
  <button class="ui-button --xs">
    Simple Button
  </button>
</div>

Use `.--rounded` to make your button fully rounded.

<div class="code-sample code-sample-inner flex gap-x-2 items-center">
  <button class="ui-button --rounded">
    Rounded Button
  </button>
  <button class="ui-button --rounded --solid">
    Rounded Solid Button
  </button>
  <button class="ui-button --rounded --minimal">
    Rounded Minimal Button
  </button>
</div>


<div class="pt-6 flex gap-x-2 code-sample code-sample-inner">
  <button class="ui-button --rounded">
    <img src="/assets/icons/heroicons/envelope-outline.svg" />
    rounded
  </button>
  <button class="ui-button --motion-forward">
    Forward Motion
    <img src="/assets/icons/heroicons/arrow-right.svg" />
  </button>
  <button class="ui-button --minimal">
    <img src="/assets/icons/heroicons/envelope-outline.svg" />
  </button>
  <button class="ui-button --rounded --minimal">
    <img src="/assets/icons/heroicons/ellipsis-horizontal.svg" />
  </button>
</div>

## Button Group

<div class="ui-box">
  <div class="code-sample code-sample-inner">
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

<div class="ui-box code-sample code-sample-inner">
  <form class="ui-form">
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
          <img src="/assets/icons/heroicons/arrow-left.svg" />
          Back
        </a>
      </div>
      <div class="flex gap-x-2">
        <a class="ui-button --motion-forward">
          Save Draft
          <img src="/assets/icons/heroicons/paper-airplane-outline.svg" />
        </a>
        <button type="submit" class="ui-button --solid --motion-forward" form="form1">
          Go
        </button>
      </div>
    </div>
  </form>
</div>

## Tooltips

Tooltips are based on [hint.css](https://kushagra.dev/lab/hint/). Currently they don't support html content.

<div class="ui-box space-y-4">

  <div class="code-sample code-sample-inner">
    <a href="#" class="ui-tooltip--top underline" aria-label="Use the ui-tooltip--top class">
      Tooltip Top
    </a>
  </div>

  <div class="code-sample code-sample-inner">
    <a href="#" class="ui-tooltip--right underline" aria-label="Use the ui-tooltip--right class">
      Tooltip Right
    </a>
  </div>

  <div class="code-sample code-sample-inner">
    <a href="#" class="ui-tooltip--bottom underline" aria-label="Use the ui-tooltip--bottom class">
      Tooltip Bottom
    </a>
  </div>

  <div class="code-sample code-sample-inner">
    <a href="#" class="ui-tooltip--left underline" aria-label="Use the ui-tooltip--left class">
      Tooltip Left
    </a>
  </div>

</div>

## Tabnavs

<div class="ui-box">

  <div class="pb-8">
    <div class="code-sample code-sample-inner">
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

  <div>
    <div class="code-sample code-sample-inner">
      <div class="ui-tabnav --hades" :scope="activeTab='content'">
        <a :class="scope.activeTab =='content' ? 'active' : ''" :click="scope.activeTab='content'">
          <div class="ui-titlepair --lg" href="#">
            <div class="--title">Content</div>
            <span class="--description">The main content</span>
          </div>
        </a>
        <a :class="scope.activeTab =='setup' ? 'active' : ''" :click="scope.activeTab='setup'" >
          <div class="ui-titlepair --lg" href="#">
            <div class="--title">Setup</div>
            <span class="--description">Configure Your Integration</span>
          </div>
        </a>
      </div>
    </div>
  </div>

  
</div>
  
## Search Input
<div class="ui-box flex flex-col gap-y-4">
  Use within a form or as standalone
  <div class="code-sample code-sample-inner">
    <input type="search" placeholder="Search..." class="ui-search-input w-3/4" />
  </div>
</div>

## Modals

Use a javascript sprinkle to show the modal by simply adding a class of `.--visible` to the `.ui-modal`.

<div class="ui-box">
  <div class="code-sample code-sample-inner ui-styled-text-unset mb-4" :scope="modalOpen=false">
    <div class="ui-modal"  
        role="dialog" 
        aria-modal="true" 
        :click="if (event.target.className == '--wrapper-inner') {scope.modalOpen=false}"
        :class="scope.modalOpen ? '--visible' : '' "  >
      <div class="--overlay"></div>
      <div class="--wrapper-outer" >
        <div class="--wrapper-inner">
          <div id="modal-dialog" class="--dialog" >
            <div class="--modal-top-section">
              <div class="ui-titlepair --xl">
                <h2 class="--title">
                  Your Modal Title
                </h2>
                <span class="--description">
                  Your Modal Description
                </span>
              </div>
              <div class="ui-button --rounded --minimal" :click="scope.modalOpen=false">
                <img src="/assets/icons/heroicons/x-mark.svg" />
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


  <div class="code-sample code-sample-inner ui-styled-text-unset mb-4" :scope="modalOpen=false">
    <div class="ui-modal"  
        role="dialog" 
        aria-modal="true" 
        :click="if (event.target.className == '--wrapper-inner') {scope.modalOpen=false}"
        :class="scope.modalOpen ? '--visible' : '' "  >
      <div class="--overlay"></div>
      <div class="--wrapper-outer" >
        <div class="--wrapper-inner">
          <div id="modal-dialog" class="--dialog --xs" >
            <div class="--modal-top-section">
              <div class="ui-titlepair --xl">
                <h2 class="--title">
                  Your Modal Title
                </h2>
                <span class="--description">
                  Your Modal Description
                </span>
              </div>
              <div class="ui-button --rounded --minimal" :click="scope.modalOpen=false">
                <img src="/assets/icons/heroicons/x-mark.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="ui-button --solid --motion-forward" :click="scope.modalOpen=true">
      Open Modal (xs)
    </button>
  </div>



  <div class="code-sample code-sample-inner ui-styled-text-unset mb-4" :scope="modalOpen=false">
    <div class="ui-modal"  
        role="dialog" 
        aria-modal="true" 
        :click="if (event.target.className == '--wrapper-inner') {scope.modalOpen=false}"
        :class="scope.modalOpen ? '--visible' : '' "  >
      <div class="--overlay"></div>
      <div class="--wrapper-outer" >
        <div class="--wrapper-inner">
          <div id="modal-dialog" class="--dialog --sm" >
            <div class="--modal-top-section">
              <div class="ui-titlepair --xl">
                <h2 class="--title">
                  Your Modal Title
                </h2>
                <span class="--description">
                  Your Modal Description
                </span>
              </div>
              <div class="ui-button --rounded --minimal" :click="scope.modalOpen=false">
                <img src="/assets/icons/heroicons/x-mark.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="ui-button --solid --motion-forward" :click="scope.modalOpen=true">
      Open Modal (sm)
    </button>
  </div>


  <div class="code-sample code-sample-inner ui-styled-text-unset mb-4" :scope="modalOpen=false">
    <div class="ui-modal"  
        role="dialog" 
        aria-modal="true" 
        :click="if (event.target.className == '--wrapper-inner') {scope.modalOpen=false}"
        :class="scope.modalOpen ? '--visible' : '' "  >
      <div class="--overlay"></div>
      <div class="--wrapper-outer" >
        <div class="--wrapper-inner">
          <div id="modal-dialog" class="--dialog --lg" >
            <div class="--modal-top-section">
              <div class="ui-titlepair --xl">
                <h2 class="--title">
                  Your Modal Title
                </h2>
                <span class="--description">
                  Your Modal Description
                </span>
              </div>
              <div class="ui-button --rounded --minimal" :click="scope.modalOpen=false">
                <img src="/assets/icons/heroicons/x-mark.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="ui-button --solid --motion-forward" :click="scope.modalOpen=true">
      Open Modal (lg)
    </button>
  </div>

</div>

## Toasts

Toasts are a simple way to display a message to the user.

<div class="ui-box">
  <div class="code-sample code-sample-inner">
    <button class="ui-button --solid --motion-forward" 
          :click="document.getElementById('demo-toast').classList.add('--animate-in')">
      Trigger Toast
    </button>
    <div class="ui-toasts">
      <div class="--toast" id="demo-toast">
        <div class="--wrapper">
          <div class="--content">
            <div class="--dismiss">
              <img src="/assets/icons/heroicons/x-mark.svg" />
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

<div class="ui-box">
  <div class="code-sample code-sample-inner">
    <div class="ui-eyebrow">Eyebrow</div>
  </div>
</div>

## Switch

<div class="ui-box ui-styled-text-unset">
  <div class="flex items-center code-sample code-sample-inner">
    <label class="ui-switch">
      <input type="checkbox" />
      <span class="--slider" ></span>
    </label>
  </div>
</div>

## Chips

<div class="ui-box">
  <div class="code-sample code-sample-inner pb-3">
    <div class="ui-chip">Default</div>
    <div class="ui-chip --green">Green</div>
    <div class="ui-chip --yellow">Yellow</div>
    <div class="ui-chip --red">Red</div>
    <div class="ui-chip --blue">Blue</div>
  </div>

  <div class="code-sample code-sample-inner pb-3">
    <div class="ui-chip --lg">Default</div>
    <div class="ui-chip --lg --green">Green</div>
    <div class="ui-chip --lg --yellow">Yellow</div>
    <div class="ui-chip --lg --red">Red</div>
    <div class="ui-chip --lg --blue">Blue</div>
  </div>

  <div class="code-sample code-sample-inner">
    <div class="ui-chip --sm">Default</div>
    <div class="ui-chip --sm --green">Green</div>
    <div class="ui-chip --sm --yellow">Yellow</div>
    <div class="ui-chip --sm --red">Red</div>
    <div class="ui-chip --sm --blue">Blue</div>
  </div>
</div>

## Title Pairs

Title pairs are a simple way to display a title and description.

<div class="ui-box ui-styled-text-unset">
  <div class="space-y-4">
    <div class="code-sample code-sample-inner">
      <div class="ui-titlepair --xl">
        <h3 class="--title ">An extra large title</h3>
        <p class="--description">An extra large description</p>
      </div>
    </div>
    <div class="code-sample code-sample-inner">
      <div class="ui-titlepair --lg">
        <h3 class="--title ">A large title</h3>
        <p class="--description">A large description</p>
      </div>
    </div>
    <div class="code-sample code-sample-inner">
      <div class="ui-titlepair">
        <h3 class="--title">A normal title</h3>
        <p class="--description">A normal description</p>
      </div>
    </div>
  </div>

</div>

## Boxes

Boxes tend to make up the skeleton of any UI. They can be used to contain content, or as a container for other UI elements.

<div class="space-y-6 ui-styled-text-unset">

  <div class="ui-box code-sample">
    A simple box
  </div>

  <div class="ui-box code-sample">
    <div class="ui-titlepair --xl">
      <h3 class="--title">A box with a Title Pair</h3>
      <p class="--description">Title Pair Description</p>
    </div>
  </div>


  <div class="ui-box code-sample">
    <div class="--top">
      <div class="ui-titlepair --xl">
        <h3 class="--title">A box with a Top section</h3>
        <p class="--description">Title Pair Description</p>
      </div>
    </div>
    <div>
      Content goes here
    </div>
  </div>

</div>

## Expander 

An expander is a simple way to animate the height of a content container. 

<div class="ui-box code-sample code-sample-inner">
  <a class="underline cursor-pointer" :click="document.getElementById('demo-expander').classList.toggle('--expanded')">
    Toggle Expander
  </a>
  <div class="ui-expander" id="demo-expander">
    <div>
      Content goes here
    </div>
  </div>
</div>

## Shimmer

<div class="ui-box code-sample code-sample-inner">

  <div class="ui-shimmer">
    <div class="--circle"></div>
    <div class="--rect"></div>
    <div class="--rect --width-.75"></div>
    <div class="--rect --width-.5"></div>
    <div class="--rect --width-.25"></div>
  </div>

</div>

## Styled Text

Wrap prose-like content in `.ui-styled-text` to get clean, pretty formatting.

<div class="ui-box">

  <div class="ui-styled-text code-sample">

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

## Tables

<script>
  tableClass = '';
  classes = ['--bravo', '--striped']
  function removeClasses() {
    document.getElementById('table-example')
      .classList
      .remove(...classes);
  }
</script>

<div class="ui-tabnav --ares mb-5">
  <div :class="tableClass =='' ? 'active' : ''" class="active">
    <button :click="removeClasses(); tableClass=''" >
      Default
    </button>
  </div>
  <div :class="tableClass =='--bravo' ? 'active' : ''" class="active">
    <button :click="removeClasses(); tableClass='--bravo'" >
      Bravo
    </button>
  </div>
  <div :class="tableClass =='--striped' ? 'active' : ''" class="active">
    <button :click="removeClasses(); tableClass='--striped'" >
      Striped
    </button>
  </div>
</div>

<table id="table-example" class="code-sample ui-table ui-styled-text-unset" :class="tableClass">
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