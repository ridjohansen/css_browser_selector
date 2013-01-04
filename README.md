<!-- Main hero unit for a primary marketing message or call to action -->
<div class="hero-unit" id="Home">
    <h1>CSS Browser Selector +</h1>
    <h2>A Cross-browser Responsive Design Helper</h2>

    <p>
        CSS Browser Selector + is a very small javascript which empowers CSS selectors.
    </p>

    <p>
        <a href="http://ridjohansen.github.com/css_browser_selector/" target="_blank">http://ridjohansen.github.com/css_browser_selector/</a>
    </p>

    <h4>See an example:</h4>
<pre>
&lt;html lang="pt-br" class="webkit chrome chrome25 win win8 js orientation_landscape minw_980 maxw_1199 no-hidpi datauri"&gt;
</pre>

    <div class="container-fluid">
        <div class="row-fluid">
            <div class="span12">
                <p>
                    <a href="https://github.com/ridjohansen/css_browser_selector/zipball/master"
                       class="btn btn-block btn-large btn-success">
                        CSS Browser Selector Download
                    </a>
                </p>
            </div>
        </div>
        <div class="row-fluid">
            <ul class="unstyled">

                <li class="span4">
                    <h3 class="btn btn-block btn-large btn-primary">Best part</h3>

                    <ul>
                        <li>no more hacks</li>
                        <li>all compliant code</li>
                    </ul>
                </li>
                <li class="span4">
                    <h3 class="btn btn-block btn-large btn-primary">Cross-browser Media Queries like helper</h3>

                    <p>Alternative method of mediaqueries for developing responsive design for older browsers.</p>
                </li>
                <li class="span4">
                    <h3 class="btn btn-block btn-large btn-primary">You can now write code for</h3>

                    <ul>
                        <li>browser</li>
                        <li>browser version</li>
                        <li>platform</li>
                        <li>platform version</li>
                        <li>device</li>
                        <li>device version</li>
                        <li>min-width and</li>
                        <li>max-width screen detection</li>
                        <li>orientation screen detection (landscape or portrait).</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

    <p>
        <strong>More info:</strong>
        <br/>(http://rafael.adm.br/css_browser_selector)
    </p>

    <p>
        <strong>beta/experimental versions:</strong>
        <br/>(https://github.com/ridjohansen/css_browser_selector/)
        <br/>(https://github.com/verbatim/css_browser_selector/)
    </p>
</div>

<!-- Example row of columns -->
<div class="row">
<div class="span12">

<h2 id="Identifies">Identifies</h2>
<ul>
    <li>browsers: Firefox; IE; Opera; Safari; Chrome, Konqueror, Iron</li>
    <li>browser versions: (most importantly: ie6, ie7, ie8, ie9)</li>
    <li>rendering engines: Webkit; Mozilla; Gecko</li>
    <li>platforms/OSes: Mac; Win: Win8, Win7, Vista, WinXP, Win2k, WinNT; FreeBSD; Linux/x11</li>
    <li>devices: Ipod; Ipad; Iphone; WebTV; Blackberry; Android; J2me; RIM Playbook; mobile (generic)</li>
    <li>enabled technology: JS (use in conjunction with &lt;html class="no-js"&gt; for even more granular
        control)
    </li>
    <li>language detection</li>
</ul>

<h4>Recent contributors to 0.5, 0.6, 0.7:</h4>

<ul>
    <li>
        <strong>improve and update features for cross-browser development</strong>
        <br/>https://github.com/ridjohansen/css_browser_selector/
    </li>
    <li>
        <strong>more detailed IE detection:</strong>
        <br/>https://github.com/kevingessner/css_browser_selector/
    </li>
    <li>
        <strong>more detailed WIN detection:</strong>
        <br/>https://github.com/saar/css_browser_selector
    </li>

    <li>
        <strong>no-js to js:</strong>
        <br/>paul irish: http://paulirish.com/2009/avoiding-the-fouc-v3/
    </li>

    <li>
        <strong>mac versioning</strong>
        <br/>https://github.com/haraldmartin/css_browser_selector
    </li>
</ul>

<h4>Version History</h4>
<ul>
    <li>
        <strong>v0.7 2013-04-01</strong>
        <br/>Add support to Hi-dpi displays Selector
        <br/>Add Pixel Ratio support for 1.5 and 2
        <br/>Add support to dataURI's Selector
    </li>
    <li>
        <strong>v0.6.2 2012-09-10</strong>
        <br/>add new features for cross-browser development
        <br/>update the commons devices width (based on Twitter Bootstrap)
        <br/>improve continuously evaluates browser max-width and min-width (helper for mediaqueries-like screen
        width classes)
        <br/>improve continuously evaluates browser orientation (helper for mediaqueries-like orientation
        classes)
    </li>
    <li>
        <strong>v0.6.1 2012-03-14</strong>
        <br/>iOS version detection
        <br/>beta: detect if being run in iPad app.
        <br/>(from: http://stackoverflow.com/questions/4460205/detect-ipad-iphone-webview-via-javascript)
    </li>
    <li>
        <strong>v0.6.0 2012-01-24</strong>
        <br/>more detailed support for Opera, Chrome, Safari (and revised support for Firefox)
        <br/>versioning for Chrome, Blackberry, Android, Mac
        <br/>Android device detection
        <br/>altered how 'mobile' is deterimed to be added to the class string
        <br/>language detection
        <br/>RIM Playbook added
        <br/>continuously evaluates browser max width (in case of resizing)
        <br/>continuously evaluates browser orientation (portrait vs. landscape)
    </li>
    <li>
        <strong>v0.5.0 2011-08-24</strong>
        <br/>any version of Firefox
        <br/>more versions of Windows (Win8 [tentative], Win7, Vista, XP, Win2k)
        <br/>more versions of IE under unique conditions
        <br/>if "no-js" in HTML class: removes and replaces with "js" (&lt;html class="no-js"&gt;)
    </li>
</ul>

<h2 id="Resources">Resources</h2>

<ul>
    <li>
        <strong>navigator.userAgent strings:</strong>
        <br/>http://en.wikipedia.org/wiki/User_agent
        <br/>http://www.useragentstring.com/pages/useragentstring.php
        <br/>http://www.user-agents.org
        <br/>http://www.zytrax.com/tech/web/mobile_ids.html
    </li>
    <li>
        <strong>history of the user agent string:</strong>
        <br/>http://www.nczonline.net/blog/2010/01/12/history-of-the-user-agent-string/
    </li>
    <li>
        <strong>language list:</strong>
        <br/>http://msdn.microsoft.com/en-us/library/ms533052%28v=vs.85%29.aspx
    </li>
    <li>
        <strong>windows nt list</strong>
        <br/>http://en.wikipedia.org/wiki/Windows_NT
    </li>
    <li>
        <strong>blackberry user agent string interpertation:</strong>
        <br/>http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/How-to-detect-the-BlackBerry-Browser/ta-p/559862
    </li>
    <li>
        <strong>javascript compression:</strong>
        <br/>http://minifyjavascript.com
    </li>
    <li>
        <strong>screen resolutions:</strong>
        <br/>http://cartoonized.net/cellphone-screen-resolution.php
    </li>
    <li>
        <strong>aspect ratio:</strong>
        <br/>http://www.htmlgoodies.com/beyond/webmaster/toolbox/article.php/3889591/Detect-and-Set-the-iPhone--iPads-Viewport-Orientation-Using-JavaScript-CSS-and-Meta-Tags.htm
    </li>
    <li>
        <strong>iOS detection:</strong>
        <br/>http://stackoverflow.com/questions/4460205/detect-ipad-iphone-webview-via-javascript
    </li>
</ul>

<h4>Other Versions</h4>
<ul>
    <li>
        <strong>Ruby on Rails Plugin by Reid MacDonald</strong>
        <br/>http://latimes.rubyforge.org/svn/plugins/css_browser_selector/
    </li>
    <li>
        <strong>PHP CSS Browser Selector by Bastian Allgeier</strong>
        <br/>http://bastian-allgeier.de/css_browser_selector/
    <li>
        <strong>Wordpress Plugin by Adrian hanft</strong>
        <br/>http://wordpress.org/extend/plugins/browser-specific-css/
    </li>
</ul>

<h2 id="Example">Example</h2>
<div class="container-fluid">
    <div class="row-fluid">
        <div class="span4">
            <h3 class="btn btn-block btn-large btn-primary">Browser, Device, OS and Javascript detection</h3>
<pre>
&lt;style&gt;
.ie .example { background-color: yellow; }
.ie7 .example { background-color: orange }
.gecko .example { background-color: gray; }
.win.gecko .example { background-color: red; }
.linux.gecko .example { background-color: pink; }
.opera .example { background-color: green; }
.konqueror .example { background-color: blue; }
.webkit .example { background-color: black; }
.chrome .example { background-color: cyan; }
.example { width: 100px; height: 100px; }
.no-js, .no_js, .nojs { display: block; }
.js { display: none; }
&lt;/style&gt;
</pre>
        </div>
        
        <div class="span4">
            <h3 class="btn btn-block btn-large btn-primary">dataURI Selector</h3>
<pre>
&lt;style&gt;
.datauri .example_bg {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC');
}
.no-datauri .example_bg {
    background-image: url('bg_default.png');
}
.datauri .img_default, .no-datauri .img_uri {
    display: none !important;
}
&lt;/style&gt;

&lt;div class="example_bg"&gt;
  &lt;img class="img_uri" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC" alt="with dataURI" /&gt; 
  &lt;img class="img_default" src="img_default.png" alt="without dataURI" /&gt; 
&lt;/div&gt;
</pre>
        </div>
        
        <div class="span4">
            <h3 class="btn btn-block btn-large btn-primary">Hi-dpi and Pixel-Ratio Selector</h3>
<pre>
&lt;style&gt;
.img_hidpi {
    display: none;
}
.no-hidpi .example_bg {
    background-image: url('bg_default.png');
}
.hidpi .img_default, .no-hidpi .img_hidpi {
    display: none !important;
}
.retina_1x .example_bg {
    background-image: url('bg_hidpi_1x.png');
}
.retina_2x .example_bg {
    background-image: url('bg_hidpi_2x.png');
}
.retina_2x .img_default, .retina_2x .x1 {
    display: none !important;
}
.retina_1x .img_default, .retina_1x .x2 {
    display: none !important;
}

or /* http://bjango.com/articles/min-device-pixel-ratio/ */

@media 
only screen and (min--moz-device-pixel-ratio: 1.5),
only screen and (-o-min-device-pixel-ratio: 3/2),
only screen and (-webkit-min-device-pixel-ratio: 1.5),
only screen and (min-device-pixel-ratio: 1.5) {
    .example_bg {
        background-image: url('bg_hidpi_1x.png');
    }
    .img_default, .x2 {
        display: none;
    }
}

@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (     -o-min-device-pixel-ratio: 2/1),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) { 
    .example_bg {
        background-image: url('bg_hidpi_2x.png');
    }
    .img_default, .x1 {
        display: none;
    }
}
&lt;/style&gt;

&lt;div class="example_bg"&gt;
    &lt;img class="img_hidpi x2" src="img_hidpi_2x.png" alt="with pixel-ratio &gt;= 2" /&gt;
    &lt;img class="img_hidpi x1" src="img_hidpi_1x.png" alt="with pixel-ratio &gt; 1 and &lt; 2" /&gt; 
    &lt;img class="img_default" src="img_default.png" alt="with pixel-ratio 1 or default" /&gt; 
&lt;/div&gt;
</pre>
        </div>

        <div class="span4">
            <h3 class="btn btn-block btn-large btn-primary">Media Queries (Screen Width)</h3>
<pre>
&lt;style&gt;
@media (max-width: 767px) {
.example {
border: 2px solid purple!important;
}
}
/* or */
.minw_0 .example, .maxw_767 .example {
border: 2px solid purple!important;
}

@media (min-width: 768px) and (max-width: 979px) {
.example {
border: 2px solid green!important;
}
}
/* or */
.minw_768.maxw_979 .example {
border: 2px solid green!important;
}

@media (min-width: 1200px) {
.example {
border: 2px solid orange!important;
}
}
/* or */
.minw_1200 .example {
border: 2px solid orange!important;
}
&lt;/style&gt;
</pre>
        </div>
        <div class="span4">
            <h3 class="btn btn-block btn-large btn-primary">Media Queries (Orientation)</h3>
<pre>
&lt;style&gt;
@media (orientation: landscape) {
.example {
border: 2px solid red!important;
}
}
/* or */
.orientation_landscape .example {
border: 2px solid red!important;
}

@media (orientation: portrait) {
.example {
border: 2px solid blue!important;
}
}
/* or */
.orientation_portrait .example {
border: 2px solid blue!important;
}
&lt;/style&gt;
</pre>
        </div>
    </div>
</div>


<h2 id="License">License</h2>

<p>http://creativecommons.org/licenses/by/2.5/</p>

<h4>Original Author</h4>

<p>
    <strong>Rafael Lima</strong>
    http://rafael.adm.br
</p>

<h4>Based on idea by 37signals</h4>

<p>http://37signals.com/svn/archives2/browser_selectors_in_css.php</p>

<h2 id="Contributors">Contributors</h2>
<ul>
    <li>Richard Duchatsch Johansen @ridjohansen (http://github.com/ridjohansen)</li>
    <li>Niyaz (http://github.com/niyazpk)</li>
    <li>Marcio Trindade (http://github.com/marciotrindade)</li>
    <li>rbottarelli (http://github.com/rbottarelli)</li>
    <li>Bryan Chow (http://github.com/bryanchow)</li>
    <li>Derek Lio (http://github.com/dereklio)</li>
    <li>Paul Irish (http://github.com/paulirish)</li>
    <li>Preston Badeer</li>
    <li>Upekshapriya</li>
    <li>André Lopes</li>
    <li>Tazio Mirandola - copiaincolla pubblicità</li>
    <li>Reid MacDonald (http://geminstallthat.wordpress.com)</li>
    <li>Vinicius Braga (http://viniciusbraga.com)</li>
    <li>Chris Preece (http://www.mmtdigital.co.uk)</li>
    <li>Dominykas</li>
    <li>M@ McCray</li>
    <li>Daniel Westermann-Clark</li>
    <li>Steve Clay (http://mrclay.org/)</li>
    <li>Jeff Bellsey</li>
    <li>Jean Pierre</li>
    <li>Micah Snyder</li>
    <li>Derek (http://amphibian.info)</li>
    <li>Jesse Scott</li>
    <li>Moises Kirsch (http://www.moiblog.com/)</li>
    <li>Alex Wiltschko</li>
    <li>Chris Warren and Tony Nelson (http://www.imagetrend.com)</li>
    <li>glasser</li>
</ul>
</div>
</div>
