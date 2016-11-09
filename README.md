# Dragon Boot
*Drag and Drop Bootstrap 4*


<img width="700" alt="screen shot 2016-11-09 at 12 53 59 pm" src="https://cloud.githubusercontent.com/assets/3937557/20154558/c860a832-a67c-11e6-8be2-1c32ef72fb23.png">

<img width="700" alt="screen shot 2016-11-09 at 12 57 25 pm" src="https://cloud.githubusercontent.com/assets/3937557/20154573/dbefb1ae-a67c-11e6-8457-69b7ed22783d.png">


#### https://fblanton.github.io/dragandboot/

A tool for creating websites that conform to the Bootstap 4 grid and component system .

#### Nouns
* Page
* App Toolbar
* Component

#### Store Structure
```javascript
{ pages: [
  {uuid: ##1, title: 'Home'},
  {uuid: ##2, title: 'About'},
  ...],
  activePage: ##1,
  ...
},
{ components: [
  {parent: ##1, uuid: ##3, ...},
  {parent: ##3, uuid: ##4, ...},
  {parent: ##1, uuid: ##5, ...},
  {parent: ##2, uuid: ##6, ...},
  {parent: ##4, uuid: ##7, ...},
  ...],
  selectedComponent: ##4,
  ...
},
{ ...otherStoreState }
```
*which is used to flatten on page structure:*
```javascript
{
  pages: [
    {
      uuid: ##1,
      title: 'Home',
      selected: true,
      children: [
        {
          uuid: ##3,
          ...,
          children: {
            {
              uuid: ##4,
              selected: true,
              ...
            },
          }
        },
        {uuid: ##5, ...},
      ]
    },
    { ... },
    ...
  ]
}
```

#### Action Creators
* [ ] ADD_PAGE
* [ ] DELETE_PAGE
* [ ] ADD_COMPONENT
* [ ] DELETE_COMPONENT
* [ ] UPDATE_PARENT

#### Page Component
Render will need to Query for all children and draw them.
