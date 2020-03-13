// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter( d => d.toLoweCase() === string.toLoweCase() )
}
