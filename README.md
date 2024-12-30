# JavaScript Null and Zero Handling Bug

This repository demonstrates a common error in JavaScript related to handling null and 0 values using loose comparison. The `foo` function intends to add two numbers but incorrectly treats null as 0, leading to unexpected results. The solution shows a corrected version employing strict equality.  This subtle bug highlights the importance of using strict equality (`===`) when comparing values to ensure correctness.

## Bug
The bug lies in the loose comparison (`==`) used in the `if` condition. When null is compared with 0 using loose comparison it evaluates to true leading to incorrect results.

## Solution
The solution corrects this by using strict equality (`===`), which distinguishes between null and 0. This ensures that only when both a and b are strictly equal to null, the function returns 0; otherwise, the addition proceeds correctly.