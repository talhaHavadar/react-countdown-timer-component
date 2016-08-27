## ReactJS Countdown Timer
__________________________
This is a simple timer component that you can use only functional.

Firstly you need to import `components/CountdownTimer.jsx` file to your React project.
```javascript
import CountdownTimer from './components/CountdownTimer';
```

To use this component you need to give endDate component as a javascript Date object.
For example:

```javascript
<CountdownTimer endDate={new Date(2016,9,17,0,0,0,0)} lang="en" />
```


### Use with custom handler
__________________________
Firstly your custom handler function needs to be like this scheme

`yourCustomHandler(days, hours, minutes, seconds);`

Example:

```javascript
function yourHandlerFunction(days, hours, minutes, seconds) {
    console.log(days,hours, minutes, seconds);
}

<CountdownTimer endDate={new Date(2016,9,17,0,0,0,0)} customTickHandler={yourHandlerFunction} lang="en" />
```

### Use only functional
__________________________
`onlyFunctional` prop is false as default.

```javascript
<CountdownTimer endDate={new Date(2016,9,17,0,0,0,0)} onlyFunctional={true} customTickHandler={yourHandlerFunction} lang="en" />
```


# Prepared By

Talha Can Havadar