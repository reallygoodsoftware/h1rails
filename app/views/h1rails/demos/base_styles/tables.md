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

<table id="table-example" class="ui-table ui-styled-text-unset" :class="tableClass">
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
    <tr>
      <th>11</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Norwich_City_F.C."
          title="Norwich City F.C."
          >Norwich City</a
        >
      </td>
      <td>38</td>
      <td>10</td>
      <td>14</td>
      <td>14</td>
      <td>41</td>
      <td>58</td>
      <td>-17</td>
      <td>44</td>
      <td></td>
    </tr>
    <tr>
      <th>12</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Fulham_F.C."
          title="Fulham F.C."
          >Fulham</a
        >
      </td>
      <td>38</td>
      <td>11</td>
      <td>10</td>
      <td>17</td>
      <td>50</td>
      <td>60</td>
      <td>-10</td>
      <td>43</td>
      <td></td>
    </tr>
    <tr>
      <th>13</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Stoke_City_F.C."
          title="Stoke City F.C."
          >Stoke City</a
        >
      </td>
      <td>38</td>
      <td>9</td>
      <td>15</td>
      <td>14</td>
      <td>34</td>
      <td>45</td>
      <td>-11</td>
      <td>42</td>
      <td></td>
    </tr>
    <tr>
      <th>14</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Southampton_F.C."
          title="Southampton F.C."
          >Southampton</a
        >
      </td>
      <td>38</td>
      <td>9</td>
      <td>13</td>
      <td>16</td>
      <td>49</td>
      <td>60</td>
      <td>-11</td>
      <td>41</td>
      <td></td>
    </tr>
    <tr>
      <th>15</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Aston_Villa_F.C."
          title="Aston Villa F.C."
          >Aston Villa</a
        >
      </td>
      <td>38</td>
      <td>10</td>
      <td>11</td>
      <td>17</td>
      <td>47</td>
      <td>69</td>
      <td>-22</td>
      <td>41</td>
      <td></td>
    </tr>
    <tr>
      <th>16</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Newcastle_United_F.C."
          title="Newcastle United F.C."
          >Newcastle United</a
        >
      </td>
      <td>38</td>
      <td>11</td>
      <td>8</td>
      <td>19</td>
      <td>45</td>
      <td>68</td>
      <td>-23</td>
      <td>41</td>
      <td></td>
    </tr>
    <tr>
      <th>17</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Sunderland_A.F.C."
          title="Sunderland A.F.C."
          >Sunderland</a
        >
      </td>
      <td>38</td>
      <td>9</td>
      <td>12</td>
      <td>17</td>
      <td>41</td>
      <td>54</td>
      <td>-13</td>
      <td>39</td>
      <td></td>
    </tr>
    <tr>
      <th>18</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Wigan_Athletic_F.C."
          title="Wigan Athletic F.C."
          >Wigan Athletic</a
        >
        <strong>(R)</strong>
      </td>
      <td>38</td>
      <td>9</td>
      <td>9</td>
      <td>20</td>
      <td>47</td>
      <td>73</td>
      <td>-26</td>
      <td>36</td>
      <td>
        Relegation to the
        <a
          href="https://en.wikipedia.org/wiki/2013%E2%80%9314_Football_League_Championship"
          title="2013–14 Football League Championship"
          >Football League Championship</a
        >
      </td>
    </tr>
    <tr>
      <th>19</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Reading_F.C."
          title="Reading F.C."
          >Reading</a
        >
        <strong>(R)</strong>
      </td>
      <td>38</td>
      <td>6</td>
      <td>10</td>
      <td>22</td>
      <td>43</td>
      <td>73</td>
      <td>-30</td>
      <td>28</td>
      <td>
        Relegation to the
        <a
          href="https://en.wikipedia.org/wiki/2013%E2%80%9314_Football_League_Championship"
          title="2013–14 Football League Championship"
          >Football League Championship</a
        >
      </td>
    </tr>
    <tr>
      <th>20</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Queens_Park_Rangers_F.C."
          title="Queens Park Rangers F.C."
          >Queens Park Rangers</a
        >
        <strong>(R)</strong>
      </td>
      <td>38</td>
      <td>4</td>
      <td>13</td>
      <td>21</td>
      <td>30</td>
      <td>60</td>
      <td>-30</td>
      <td>25</td>
      <td>
        Relegation to the
        <a
          href="https://en.wikipedia.org/wiki/2013%E2%80%9314_Football_League_Championship"
          title="2013–14 Football League Championship"
          >Football League Championship</a
        >
      </td>
    </tr>
  </tbody>
</table>