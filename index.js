// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter( driver => driver.toLoweCase() === string.toLoweCase() )
}

findMatching = (drivers, string) => {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
  return drivers.filter( drivers => drivers.toLoweCase() === string.toLoweCase() )
}