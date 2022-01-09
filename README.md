# PassGem - A Password Generator

## Purpose

The purpose of this page is to take user input for password length and content criteria; upper case letters, lower case letters, special characters, and numbers. Then display the password on the page based on the input. The criteria should be asked each time the 'generate password' button is pressed.

## Function structure

The functions are called in the following structure

1. writePassword ()
    - generatePassword()
        - lengthResponse()
        - charPrompts()
        - randomFill()
            - switchSelector()
                - random()
            - randomCase()
                - random()

## Deployed Page

https://atticus-robinson.github.io/PassGem/

## Page Image

![PassGem](./Assets/images/screenshot.png)