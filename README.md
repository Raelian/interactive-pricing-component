# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- SASS
- BEM Methodology

### What I learned

How to make a slider in which you can control the color on different web browsers, the below example allows you to use gradient colors on chrome.
Strangely enough it is easier to do this on Mozzila Firefox and Microsoft Edge but on Chrome it can prove a bit more tricky.

/* For when the page first loads */
	document.querySelector('.input-slider').style.background = 
    		`linear-gradient(to right, 
   		 #A5F3EB 0%, #A5F3EB ${(value-min)/(max-min)*100}%, 
    		#EAEEFB ${(value-min)/(max-min)*100}%, #EAEEFB 100%)`;

/* For making the slider react to user input */
	document.querySelector('.input-slider').oninput = function() {
    		this.style.background = 
    		`linear-gradient(to right, 
    		#A5F3EB 0%, #A5F3EB ${(this.value-this.min)/(this.max-this.min)*100}%, 
    		#EAEEFB ${(this.value-this.min)/(this.max-this.min)*100}%, #EAEEFB 100%)`;
	}

### Continued development

Understanding Javascript better and learning more about accessability features.

## Acknowledgments

I forgot from where I saw the slider coloring trick, it was on some site and posted years ago I think.
I apologize for forgetting and failing to give acknowledgments where they are due but if the one who made it seeis this, I wish to say thank you in advance! It helped! ^^