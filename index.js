// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter( drivers => drivers.toLoweCase() === string.toLoweCase() )
}

