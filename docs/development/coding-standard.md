# Coding Standard

The coding standard aims to establish guidelines for consistent and maintainable code across the project.

Adhering to these standards enhances **readability**, **facilitates collaboration**, and ensures the **longevity** of the project.

## Conclusion

Well, just see the GLOBAL and following language standard as the table shows:

|Language|Standard|
|--|--|
|Python|[PEP8](https://peps.python.org/pep-0008/)|
|JS/TS|[Standard](https://github.com/standard/standard)|

## Formating and Naming

Considering we might use various mark or program language, \
it's better to have a global standard but specialize them in the actual cases.

### GLOBAL

|||
|---|---|
| Indentation | 4 spaces |
| Line Length | 128 |
| Braces Placement | in the same line; or all in a new line (see *eg1*) |
| Naming | the key is readability(except for loop usage) |
| Constants | use SCREAMING_SNAKE_CASE |

```python
# eg1: Braces Placement 

a_func({a: 1, b: 2}, "test")

b_func(
    {a: 1, b: 2},
    "test"
)

c_func(
    {
        a: 1,
        b: 2
    },
    "test"
)

```

### Python

**Variables**: like`user_account_id`, `desired_password`, `user_input_password`

**Functions and Methods**: the same as variables

**Classes**: PascalCase, like `TeacherAccount`, `StudentAccount`

### JavaScript/TypeScript

**Variables**: use camelCase, like`userAccountId`, `desiredPassword`, `userInputPassword`

**Functions and Methods**: the same as variables, like`getUserInfo`

**Classes**: PascalCase, like `TeacherAccount`, `StudentAccount`

### JSON

### Log

One line for a record. \
Or show the record with identation.

```log
<yyyy-mm-dd> <HH:MM:SS> [LEVEL] [Module] Messages  
```

## Documentation

Comments and document are important for code.

### Comments

**When to Comment**: Comment whenever code behavior may not be immediately obvious to others.

**What to Comment**: Explain why certain decisions were made, potential edge cases, and any non-trivial algorithms.

#### Inline Comments

Start a new line above the line to comment.

#### File-lvel Comments

Usually, file-level comment gives a metadata of the file, here are some templates:

```python
# author: Lan_zhijiang @xiaoland
# email: lanzhijiang@hadream.ltd
# created: 2024-03-22
# description: some desc ..... 

# description: \
# some desc
# second line of desc

"""
author: Lan_zhijiang other_author_name
email: lanzhijiang@foxmail.com email_addr
created: 2024-03-22
description: \
some desc
second line of desc
"""
```

But not all file can has comments, such as JSON. \
It's recommend to write `xxx.json.doc` to give a comment. \
Or you can write like below.

```json
{
    "#comment": "the keys to access tencent cloud api",
    "sms": {
        "#comment": "for short message service"
        "secretKey": "xxxxx",
    }
}
```

#### Function and Method Comments

The comment of function or method must placed a blank line after the function signature.

```python
def a_func(a_dict, a_num):

    """
    function description

    :param a_dict: just a dictonary
    :type a_dict: dict
    :param a_num: just a int
    :type a_num: int

    :return type
    """

```

#### Class and Struct Comments

Put the class comments like this:

```python
class AClass():
    '''The description of class'''

    def __init__():
        
        """
        desc of __init__
        """
```

```JavaScript
class AClass {
    '''Just some description'''

    constructor() {

    }
}
```

### Document

## Error Handling

The principle is, at least, let other's know what is happening, **don't let it go!**

Use the apporiate Error/Exception types and fill the message.

It's recommend to extend our own Error Types so we can do these:

1. reduce duplication of logging
2. rich information and debug-friendly
3. some remedical actions

## Testing

## Version Control

The Priciple is \
never make changes directly to main, stable, canary ... release branches.

### Commit

#### When To Commit

Commit is key to rolling back. \
So commit when it's better to roll back from this point.

Don't commit before you test the code, or you makes meaingless commits.

#### Write Commit Message

Begin commit messages with a capital letter and use imperative mood.

Declare what type of this commit is, new, update, fix or what. \
And having a detailed description start from the second line.

### Pull Request

Provide clear description of your changes.

Before Merge the branch, what should be done?

1. Sign License
2. Pass the test
3. Code review, ensure code quality and funcnality
4. Is the target correct
5. Merge following the schedule

## References

1. [InKCre/.github #7](https://github.com/InKCre/.github/issues/7)
