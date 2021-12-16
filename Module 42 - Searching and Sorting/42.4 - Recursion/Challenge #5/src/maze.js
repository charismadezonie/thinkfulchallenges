/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */

function mazeSolver(maze, index = [0, 0], path = '') {
  const result = [];
  function move(maze, index = [0,0], path = ''){
    let vertPos = index[0]
    let horPos = index[1]
    let boundary = maze.length - 1
    
    if (maze[vertPos][horPos] === 'e'){
      result.push(path);
      return path;
    }
    if ((maze[vertPos][horPos+1] === ' ' || maze[vertPos][horPos+1] === 'e') ) {
      index = [vertPos, horPos+1];
      move(maze, index, path + 'R')
    }
  
    if (vertPos < boundary && (maze[vertPos+1][horPos] === ' ' || maze[vertPos+1][horPos] === 'e')) {
      index = [vertPos+1, horPos];
      move(maze, index, path + 'D')
    }
  }
  move(maze, index, path)
  return result[0]
}

module.exports = mazeSolver;
