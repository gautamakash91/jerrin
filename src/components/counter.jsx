function Counter(){
  return (
    <div>
      Hello world
      <Addition />
    </div>
  )
}

export function Calculator(){
  return (
    <div>
      this is a Calculator
      <Addition />
      <Counter />
    </div>
  )
}

export function Addition(){
  return (
    <div>
      this is the addition component
    </div>
  )
}

export default Counter; 

//RULES
// 1. Component name should always start with a capital letter 
// 2. A component needs to be exported to be imported in any other file. 
// 3. Only one component can be exported by default. Other components in the same file can be exported normally. 
// 4. Normally exported components have to be put inside { } when they are imported. 
// 5. inside of the render function there always has to be a parent div