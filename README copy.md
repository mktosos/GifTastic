# GifTastic
This project involves getting data using an api and displaying specific content. We are pulling Gifs and associated ratings from Giphy.com. The gif are made to play and pause on click. There is a input field which allows the user to input additional keywords to search and get gifs. Keywords are linked to buttons to execute search/get.

The ajax get method gets data based on the url string we create. A preset array of topics are looped through to create buttons that initiate the ajax method. The gifs are diplayed and attributes manipulated to create a play/pause function based on it atribute "state".

An exsiting problems: The click event to animate the  
gifs only functions properly on even numbered gifs. It is the same on other browsers. When I inspect each button event, I can see that on click, the even numbered gifs flip flop between animate and still properly. The 1st gif at the top never acknowledges the click at all. The subsequent even numbered gifs acknowledge the click but does not trigger a state change. It's obviously some pattern but I dont know whats wrong.

Credits The game project student developer is Mike Taniguchi.

License
The MIT License (MIT)

Copyright (c) 2019 Mike Taniguchi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
