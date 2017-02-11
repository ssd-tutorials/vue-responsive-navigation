#Responsive navigation with VueJs

Exercise files for the responsive navigation with vuejs course

[See it in action here](http://vue-responsive-navigation.ssdtutorials.com/)

##Installation

From within the project call

```
npm install
```

To generate assets for production call

```
npm run production
```
and for development

```
npm run dev
```

##Structure of the navigation

This component uses inline template, allowing you to generate the structure of the navigation dynamically, using your server programming environment.
The navigation structure looks as follow

```
// component tag
<navigation inline-template>
    
    // navigation wrapper
    <nav class="navigation" :class="expandedClass">
    
        // top bar - shows on mobile only
        <navigation-handler :telephone="'0800 800 800'"></navigation-handler>
        
        // navigation items
        <ul>
        
            // dropdown wrapper
            <drop-down-wrapper
                :id="1"
                :label="'About us'"
                :is-opened="isOpened(1)"
            >
                <li>
                    <a href="#">History</a>
                </li>
                <li>
                    <a href="#">Meet the team</a>
                </li>
                <li>
                    <a href="#">Testimonials</a>
                </li>
            </drop-down-wrapper>
            
            <drop-down-wrapper
                :id="2"
                :label="'Services'"
                :is-opened="isOpened(2)"
            >
                <li>
                    <a href="#">Service type one</a>
                </li>
                <li>
                    <a href="#">Service type two</a>
                </li>
            </drop-down-wrapper>
            
            <drop-down-wrapper
                :id="3"
                :label="'Products'"
                :is-opened="isOpened(3)"
            >
                <li>
                    <a href="#">Product number one</a>
                </li>
                <li>
                    <a href="#">Product number two</a>
                </li>
            </drop-down-wrapper>
            
            <li>
                <a href="#">Contact us</a>
            </li>
            
        </ul>
        
    </nav>

</navigation>
```