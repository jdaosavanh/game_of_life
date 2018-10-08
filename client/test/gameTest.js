const assert = require('chai').assert;
const expect = require('chai').expect;
const game = require('../game');

describe('Test changes of runChange function', () => {
    it("Input \n\r      .x.\n\r      .x.\n\r      .x.", () =>{
        let result = game.runChange([[false,false,false],[true,true,true],[false,false,false]]);
        let solution = [[false,true,false],[false,true,false],[false,true,false]];
        expect(result).to.eql(solution)
        });

    it("Input \n\r      ...\n\r      xxx\n\r      ...", () =>{
        let result = game.runChange([[false,true,false],[false,true,false],[false,true,false]]);
        let solution = [[false,false,false],[true,true,true],[false,false,false]];
        expect(result).to.eql(solution)
    });

    it("Input", () =>{
        let result = game.runChange([
            [false,false,false,false,false],
            [false,false,true,true,false],
            [false,true,false,false,true],
            [false,false,true,true,false],
            [false,false,false,false,false]]);
        let solution = [
            [false,false,false,false,false],
            [false,false,true,true,false],
            [false,true,false,false,true],
            [false,false,true,true,false],
            [false,false,false,false,false]];
        expect(result).to.eql(solution)
    });

    it("Input", () =>{
        let result = game.runChange([
            [false,false,false,false,false],
            [false,false,true,true,false],
            [false,true,false,false,true],
            [false,false,true,false,true],
            [false,false,false,true,false]]);
        let solution = [
            [false,false,false,false,false],
            [false,false,true,true,false],
            [false,true,false,false,true],
            [false,false,true,false,true],
            [false,false,false,true,false]];
        expect(result).to.eql(solution)
    });

    it("Input", () =>{
        let result = game.runChange([
            [false,false,false,false,false],
            [false,true,true,false,false],
            [false,true,false,true,false],
            [false,false,true,false,false],
            [false,false,false,false,false]]);
        let solution = [
            [false,false,false,false,false],
            [false,true,true,false,false],
            [false,true,false,true,false],
            [false,false,true,false,false],
            [false,false,false,false,false]];
        expect(result).to.eql(solution)
    });

    it("Input", () =>{
        let result = game.runChange([
            [true,true,false,false,false],
            [true,false,false,false,false],
            [false,false,false,true,false],
            [false,false,true,true,false],
            [false,false,false,false,false]]);
        let solution = [
            [true,true,false,false,false],
            [true,true,false,false,false],
            [false,false,true,true,false],
            [false,false,true,true,false],
            [false,false,false,false,false]];
        expect(result).to.eql(solution)
    });

    it("Input", () =>{
        let result = game.runChange([
            [true,true,false,false,false],
            [true,true,false,false,false],
            [false,false,true,true,false],
            [false,false,true,true,false],
            [false,false,false,false,false]]);
        let solution = [
            [true,true,false,false,false],
            [true,false,false,false,false],
            [false,false,false,true,false],
            [false,false,true,true,false],
            [false,false,false,false,false]];
        expect(result).to.eql(solution)
    });

    it("Input", () =>{
        let result = game.runChange([
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false]]);
        let solution = [
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false]];
        expect(result).to.eql(solution)
    });

    it("Input", () =>{
        let result = game.runChange([
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,true,true,false,false,true,false,false],
            [false,true,true,false,false,true,false,false],
            [false,false,false,false,false,true,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,true,true],
            [false,false,false,false,false,false,true,true]]);
        let solution = [
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,true,true,false,false,false,false,false],
            [false,true,true,false,true,true,true,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,true,false],
            [false,false,false,false,false,false,true,true],
            [false,false,false,false,false,false,true,true]];
        expect(result).to.eql(solution)
    });

    it("Input", () =>{
        let result = game.runChange([
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,true,true,false,false,true,false,false],
            [false,true,true,false,false,true,false,false],
            [false,false,false,false,false,true,false,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,true,true],
            [false,false,false,false,false,false,true,true]]);
        let solution = [
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,false,false],
            [false,true,true,false,false,false,false,false],
            [false,true,true,false,true,true,true,false],
            [false,false,false,false,false,false,false,false],
            [false,false,false,false,false,false,true,false],
            [false,false,false,false,false,false,true,true],
            [false,false,false,false,false,false,true,true]];
        expect(result).to.eql(solution)
    });
});