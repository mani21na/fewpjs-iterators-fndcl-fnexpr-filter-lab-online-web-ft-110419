// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter( driver => driver.toLoweCase() === string.toLoweCase() )
}
