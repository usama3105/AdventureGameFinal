#!/usr/bin/env node
import inquirer from 'inquirer';

class Player {
    fuel: number;

    constructor() {
        this.fuel = 100;
    }

    async play() {
        while (this.fuel > 0) {
            const { action } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'action',
                    message: 'Choose your action:',
                    choices: ['Attack', 'Drink potion', 'Run for your life'],
                },
            ]);

            switch (action) {
                case 'Attack':
                    this.fuel -= 20;
                    console.log('You attacked the opponent!');
                    break;
                case 'Drink potion':
                    this.fuel += 30;
                    console.log('You feel rejuvenated!');
                    break;
                case 'Run for your life':
                    this.fuel -= 10;
                    console.log('You escaped from danger!');
                    break;
            }
        }

        console.log(this.fuel <= 0 ? 'Game over! You ran out of fuel.' : 'Congratulations! You survived the adventure!');
    }
}

const player = new Player();
player.play();
