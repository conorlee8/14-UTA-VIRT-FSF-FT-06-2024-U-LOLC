# Conor Lee's Regex Tutorial: Decoding the Mysteries of Matching Email Addresses

## Table of Contents
1. [Introduction](#introduction)
2. [Summary](#summary)
3. [Anchors](#anchors)
   - [`^` - Start of String](#-start-of-string)
   - [`$` - End of String](#-end-of-string)
4. [Username Part](#username-part)
   - [`[a-z0-9_.-]+`](#a-z0-9_-)
5. [`@` Symbol](#-symbol)
6. [Domain Part](#domain-part)
   - [`[\da-z.-]+`](#da-z-)
7. [Top-Level Domain (TLD)](#top-level-domain-tld)
   - [`[a-z.]{2,6}`](#az26)
8. [Conclusion](#conclusion)
9. [About the Author](#about-the-author)

## Introduction
Welcome to my regex tutorial! In this guide, we'll explore how to match valid email addresses using a regular expression (regex). We'll break down the regex into its components and explain each part.

## Summary
The regex pattern we're examining is designed to match email addresses. It ensures that the input follows the correct format, including a username, domain, and top-level domain.

Here's the regex pattern we'll be exploring:

/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/


This pattern might look complex at first, but we'll break it down step by step.

## Anchors
Anchors are used to ensure that the regex matches from the start to the end of the string.

### `^` - Start of String
- **Explanation**: The `^` symbol asserts that the match must start at the beginning of the string.

### `$` - End of String
- **Explanation**: The `$` symbol asserts that the match must end at the end of the string.

## Username Part
This part of the regex matches the username in the email address.

### `[a-z0-9_.-]+`
- **Explanation**: Matches one or more lowercase letters (`a-z`), digits (`0-9`), underscores (`_`), dots (`.`), or hyphens (`-`).
- **Example**: In the email `example.email`, this part matches `example.email`.

## `@` Symbol
- **Explanation**: The `@` symbol separates the username from the domain in the email address.

## Domain Part
This part of the regex matches the domain in the email address.

### `[\da-z.-]+`
- **Explanation**: Matches one or more digits (`\d`), lowercase letters (`a-z`), dots (`.`), or hyphens (`-`).
- **Example**: In the email `example.email@domain.com`, this part matches `domain`.

## Top-Level Domain (TLD)
This part of the regex matches the top-level domain in the email address.

### `[a-z.]{2,6}`
- **Explanation**: Matches between 2 and 6 lowercase letters (`a-z`) or dots (`.`).
- **Example**: In the email `example.email@domain.com`, this part matches `com`.

## Conclusion
This regex is a powerful tool for ensuring that email addresses are formatted correctly. By understanding each component, you can see how it effectively validates the structure of an email.

## About the Author
This tutorial was created by Conor Lee, a web development student with a passion for coding and gaming. You can find more of my work and projects on [GitHub](https://github.com/ConorLee).

