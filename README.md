## Fashion App 
A fashion App with React.js using API end-point [https://s3-eu-west-1.amazonaws.com/stylr-ai-engine-srv-data/srv/data/archive/zalando-women-07-10-2017/garment_items.jl]

### Set up and scaffolding

- set up react app [create react app]
- set up git origin master and link local files [git remote add origin + ssh key]
- initial commit to check local and git repos connected
- remove React branding, check if app renders with Hello world [npm run start]
- version - 3.2/ react & dom v 16.2 Documentation. This version changes the way React HOC, Component is imported and used[https://github.com/facebook/create-react-app/commit/e4fdac2418dbd1b3d51c8f0fecb474caa001f649#diff-9e2ecb03a0ec4155fbe42095c297a58e]
- As this is causing some conflicts between yarn and npm, I will be using npm for this project
- Add styling - google fonts used an easy to read font for ux to reflect fashion + technology - style chosen 'Open Sans Condensed', sans-serif
- Adding Tachyons for styling [npm install tachyons]
- Change the styling of hello world check taychons installed
- Check debugging tools, console and react debugger for the changes

#### Branch 1 Fashion Pages

- set up folder structure for frontend and backend
- create first component for fashion catalog page that will display all the images
- test the component works with a hello world jsx-tag and import into app.js
- test the image jsx-tag and tachyons import working

#### Branch 2 Common Components

- set up folder structure to separate fashion pages from components that can be reused anywhere in the app
- create first common component - search box as a functional component, not a class-based component
- test the component works with a hello world jsx tag and import into app.js
- style component

### Master Branch - Peek Data
At this stage I wanted to get an idea of the data structure and set up a backend source folder for the fashion catalog data with a peek-data folder to:- 
- check how to view .jl files [https://stackoverflow.com/questions/47689018/how-to-open-jl-file#47689085]
- break down the data into a sample cut based on the stack-overflow recommendation
- check if I understood the syntax of the data-structure
- look at useful data to display make front-end display decisions (search-data.txt)
- as the data did not look like mongoDb, or python data I spent some time on the documentation
- - [https://github.com/JuliaWeb/Requests.jl]
- - deprecated check[https://github.com/JuliaWeb/HTTP.jl] 
- - [https://julialang.org] 
- - [https://docs.julialang.org/en/v1/base/io-network/]

After reading the documentation and watching some Julia language tutorials, I was unfamiliar with
- the Julia package installer
- Julia command line
- Julia syntax in the data opened
- While able to read the data, I was unsure how I could transform the data to text/JSON/.js
- Unclear if the link was an API and the global ```fetch()``` method could be used
- Tried the method unsuccessfully

```
fetch('https://s3-eu-west-1.amazonaws.com/stylr-ai-engine-srv-data/srv/data/archive/zalando-women-07-10-2017/garment_items.jl')
.then (response => response.json())
.then(data =>console.log(data));
```
 ![error-with-fetch-method](./src/fashion-catalog-data/peek-data/console-error-with-fetch.png)

- Looked at the option of hardcoding data and displaying images on the front end
- Made a decision on what an MVP of the brief would be - hard-coded data in an array in the front end
- Displayed one image successfully []
- Decided to proceed on this approach and to review Zalando Home Page [https://www.zalando.co.uk/women-home/] And black dress search results [https://www.zalando.co.uk/women/?q=black+dresses]





