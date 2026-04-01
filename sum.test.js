const sum = require('./sum.js');

test('adds 5 + 3 to equal 8', () => {
    expect(sum(5, 3)).toBe(8);
});
