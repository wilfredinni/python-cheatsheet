---
title: OOP Basics In python - Python Cheatsheet
description: Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of objects, which are instances of classes. OOP principles are fundamental concepts that guide the design and development of software in an object-oriented way. In Python, OOP is supported by the use of classes and objects. Here are some of the basic OOP principles in Python.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Object Oriented Programming (OOP) Basics
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">Object-Oriented Programming</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code. The data is in the form of fields (often known as attributes or properties), and the code is in the form of procedures (often known as methods).
  </base-disclaimer-content>
</base-disclaimer>

## Encapsulation

Encapsulation is the process of hiding the implementation details of an object from the outside world. This is achieved by making use of access modifiers such as public, private, and protected. In Python, there are no explicit access modifiers, but you can achieve encapsulation by using underscore prefixes to denote private or protected attributes.

```python
class MyClass:
    def __init__(self):
        self._protected_var = 10
        self.__private_var = 20

obj = MyClass()
print(obj._protected_var)   # output: 10
print(obj.__private_var)    # AttributeError: 'MyClass' object has no attribute '__private_var'
```

## Inheritance

Inheritance is the process of creating a new class by extending an existing class. The new class inherits all the properties and methods of the base class and can also add its own properties and methods.

``` python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print("")

class Dog(Animal):
    def speak(self):
        print("Woof!")

class Cat(Animal):
    def speak(self):
        print("Meow!")

dog = Dog("Rover")
cat = Cat("Whiskers")
dog.speak()   # output: Woof!
cat.speak()   # output: Meow!
```

## Polymorphism

Polymorphism is the ability of objects to take on different forms. In Python, this is achieved by using method overriding or method overloading.

```python
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

shapes = [Rectangle(4, 5), Circle(7)]
for shape in shapes:
    print(shape.area())
```

## Abstraction

Abstraction is the process of reducing complexity by hiding unnecessary details. In Python, abstraction can be achieved by using abstract classes or interfaces.

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

shapes = [Rectangle(4, 5), Circle(7)]
for shape in shapes:
    print(shape.area())
```

These are some of the basic OOP principles in Python. This page is currently in progress and more
detailed examples and explanations will be coming soon.
