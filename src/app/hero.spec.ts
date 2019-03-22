import { Hero } from './hero';

describe('Hero', () => {
  it('should create an instance', () => {
    expect(new Hero(1, 'Superman', 'Super Power', 'Lex Luthor')).toBeTruthy();
  });
});
