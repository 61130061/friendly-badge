/*
  TODO:
    - Move to utils when you done
    - Try not to use fs
*/

interface badgeOption {
  label: string,
  message: string,
  color: string
}

function makeBadge ({ 
  label,
  message,
  color,
}: badgeOption) {

}

/*
  UTILIZES Function
*/
function createAccessibleText({ label, message }: badgeOption) {
  const labelPrefix = label ? `${label}: ` : ''
  return labelPrefix + message
}

function roundUpToOdd(val: number) {
  return val % 2 === 0 ? val + 1 : val
}

function preferredWidthOf(str: string, options: object) {
  // Increase chances of pixel grid alignment.
  return roundUpToOdd(anafanafo(str, options) | 0)
}


/*
  MAIN Function
*/
class Badge {
  constructor({
    label,
    message,
    color
  }: badgeOption) {

  }

}

class Flat extends Badge {

}