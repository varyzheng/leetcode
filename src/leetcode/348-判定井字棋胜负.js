/**
 * Initialize your data structure here.
 * @param {number} n
 */
export const TicTacToe = function TicTacToe(n) {
  this.playground = [];
  this.n = n;
  for (let i = 0; i < n; i += 1) {
    this.playground.push(new Array(n));
  }
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins.
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function move(row, col, player) {
  const words = player === 1 ? 'X' : 'O';
  this.playground[row][col] = words;
  let flag = 0;
  const checkHV = function checkHV() {
    flag = player;
    for (let i = 0; i < this.n; i += 1) {
      if (this.playground[i][col] !== words) {
        flag = 0;
        break;
      }
    }
    if (flag !== 0) {
      return;
    }
    flag = player;
    for (let i = 0; i < this.n; i += 1) {
      if (this.playground[row][i] !== words) {
        flag = 0;
        break;
      }
    }
  };
  if (row === col) {
    flag = player;
    for (let i = 0; i < this.n; i += 1) {
      if (this.playground[i][i] !== words) {
        flag = 0;
        break;
      }
    }
    if (flag !== 0) {
      return flag;
    }
  }
  if (row + col === this.n - 1) {
    flag = player;
    for (let i = 0; i < this.n; i += 1) {
      if (this.playground[i][this.n - 1 - i] !== words) {
        flag = 0;
        break;
      }
    }
    if (flag !== 0) {
      return flag;
    }
  }
  checkHV.call(this);
  return flag;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
