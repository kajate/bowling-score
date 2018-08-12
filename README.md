# Bowling Score Keeper.

This game is based on the bowling score rules to provide a correct display and calculation of bowling score oer 10 frames.

When you press Roll, you receive a random number between 0 - 10, this score is then added together with your coming rolls, until you have filled all the frames.

It is built with JavaScript and jQuery.

I wanted to have a dynamic logic, and choose to work with objects that are updates based on the result. The trickiest part was to look back and update the frame that had a strike, with the score from the two consecutive rolls. 

But adding a boolean for if the last roll was a strike or not, also with keeping a strike calculator, I could calculate how many rolls after to add points to. Altough, the logic breaks if there are more than two strikes in a row, which I could not manage to get my head around within the time frame.

And regarding the time fram, to be honest, this took me more than 2-3 hours. Understanding the rules of bowling, took me about an hour chatting with a friend of mine, I had completely misunderstood it based on the explanation to you, and having never known the rules of bowling, it sure was a bit tricky in the beginning. So, some feedback for you to think about in the instructions. Other than that, it was a funny, but tricky challenged, and I had fun doing it.

With more it would be fun to make a visual interpretation of this, something i might get on doing, just because it is fun.

To open, download the zip, unzip, and open index.html in a browser.
