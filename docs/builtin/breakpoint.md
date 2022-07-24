---
title: Python breakpoint() built-in function - Python Cheatsheet
description: This function drops you into the debugger at the call site. Specifically, it calls sys.breakpointhook(), passing args and kws straight through. By default, sys.breakpointhook() calls pdb.set_trace() expecting no arguments. In this case, it is purely a convenience function so you don’t have to explicitly import pdb or type as much code to enter the debugger. However, sys.breakpointhook() can be set to some other function and breakpoint() will automatically call that, allowing you to drop into the debugger of choice.
---

# Python breakpoint() built-in function

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#breakpoint">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    This function drops you into the debugger at the call site [...].
  </base-disclaimer-content>
</base-disclaimer>

<!-- remove this tag to start editing this page -->
<empty-section />
<!-- remove this tag to start editing this page -->
