const Discord = require("discord.js");


const TOKEN =  "FUCKING ASSHOLE NIGGER DON'T COPY MY ASSHOLE CODE AND DELETE A WHOLE SERVER FUCK U U CAN'T GET IT ANYMORE"
const PREFIX = "="

var bot = new Discord.Client();

bot.on("ready", function() {
  bot.user.setGame(`Hcf [Medium] Making Factions Raidable!`,'https://twitch.tv/123silly');
    console.log(`Started bot as: ${bot.user.tag}!`);
});

bot.on("guildMemberAdd", function(member) {
member.guild.channels.find("name","join-leave").sendMessage(member.toString() + " welcome to the server! Make sure to read rules so you dont get punished! Good Luck Have Fun!");
console.log(`[SPY] A member joined a server!`)
member.addRole(member.guild.roles.find("name", "Member"));
});

var MemeL = [
'https://www.youtube.com/watch?v=lXMskKTw3Bc',
'https://imgur.com/gallery/EQ7aabW',
'https://www.youtube.com/watch?v=fd2AjG9RaKs',
'https://www.youtube.com/watch?v=P1-uCWIjZWM',
'https://www.youtube.com/watch?v=AuRXVMSG3po',
'https://www.youtube.com/watch?v=5dbG4wqN0rQ',
'https://www.youtube.com/watch?v=ZYlj5Fpk2t8',
'https://www.youtube.com/watch?v=8GE_qFURqq0',
'https://www.youtube.com/watch?v=QBPVPbLjCHw',
'https://www.youtube.com/watch?v=9S-3Uk5-Zsg',
'https://youtu.be/2A9oCUc-COY?t=7s',
'https://www.youtube.com/watch?v=UcRtFYAz2Yo',
'http://youareanidior.org',
'http://omfgdogs.com',
'I am an alien. https://www.youtube.com/watch?v=AW9NgidiUsY (whats wrong with him?)'
];

var Cats = [
'http://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16122946-500-313.jpg',
'https://i.ytimg.com/vi/cbP2N1BQdYc/maxresdefault.jpg',
'https://i.ytimg.com/vi/abVsdp3i34k/maxresdefault.jpg',
'https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg',
'https://i.pinimg.com/736x/b1/88/31/b18831f96720e907c4769168687d7fd1--cat-lovers-adorable-animals.jpg',
'https://i.pinimg.com/736x/46/ea/93/46ea9346ef8df3bf00a97f5a91747f33--kitty-cats-cute-adorable-cats.jpg',
'http://s4.thingpic.com/images/xj/8f2gBmoEaViv3wTTYDDrbR3A.jpeg',
'https://i.ytimg.com/vi/9JNkS3QGT6U/maxresdefault.jpg',
'http://a.fod4.com/images/user_photos/1343865/335cd5249b648648fb0b086282cbaf32_original.jpg',
'https://i.pinimg.com/736x/58/c9/ea/58c9eadb259b3caf945540d0fa6b123d--tabby-cats-kitty-cats.jpg',
'https://i.pinimg.com/originals/a3/9b/d9/a39bd9b96eaa4bd6a7ca902bf9ef1475.jpg',
'https://i.pinimg.com/736x/65/a8/13/65a813e23a297305035a11c7d92ccbc4--cute-black-cats-black-kittens.jpg',
];

var roasts = [
  ', you look like you are from hell not heaven.',
  ', i think your parents think your life is a joke, arent they?',
  ', Hey, did you heard that your life is a joke?',
  ', are you bad at discord or something?',
  ', You know you are only the member of the bot and you cant use all commands in it.',
  ', Are you too lazy to find secret commands or what?',
  ', Are you too lazy to use other commands than this one?',
  ', Are you going to the hospital tomorrow or something?',
  ', When you die are you going to hell or heaven?',
  ', Did you ever thinked about killing yourself?',
  ', Did you know staying outside 24/7 heals you? Try it.',
  ', I know good place for you. Its called **Middle Of The Ocean**.',
];

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "chelp":
            message.delete("chelp")
            console.log(`Help message has been sent to <@${message.author.id}> !`)
            message.channel.sendMessage(`<@${message.author.id}> -> **Commands List** has been sent to your pm!`)
            var embedt = new Discord.RichEmbed()
            .setTitle("Music Commands")
            .setDescription(':robot: Here are music commands you can use: :robot:')
            .setThumbnail ('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISERUQEhEQFhAVFRUVFRcVFQ8QFhYWFRUXFhUWFRUYHSggGBolHRUVITEiJSkrLi4uGB8zOzMtNyktLisBCgoKDg0OGhAQGi0lHiUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xABHEAACAQIDBAYHBAcHAgcAAAABAgMAEQQhMQUSQVEGEyJhcYEyQlKRobHBBxRy0SNTYoKS4fAVFjNDY5PCJKIIJXOkstPx/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EADMRAAICAQMDAAgFBAMBAAAAAAABAgMRBBIhMUFRBRMiMmFxgZEjobHB0RQVQvAzUuHx/9oADAMBAAIRAxEAPwDw+pDFQAqAFSAVACoAVAhUAhUDHqIDg0CJUgHoAcUASFIBxQBIUgJCkBIUgJCgBGQDUijDAnG4OhpNYGWA1FiJikBIGkBMGkBIGkBMGkBK9IDma6IxqAFQAqAFSAVACoAVAhUDFQA4qIEgaBDikA9AEqAHFIB98CjAEeu5AmntAW+x5CjagEVvqSaeAHCDlTAMEVwCuTW8j3GhrKGPG9+4jUcqolHAi0VECQNICYqIEgaAJA0gJUsAc3XQJCoENQAqAFQAqQCoAVACoAVACoAkKiA4oELeFGALY4nbRfM5UYArZToTTwBPDxBmtzvbxoAIbCMOF/CgCorbXLxyoAcCgB7UAGw6CmMk0IYg3seevvHEUmsgNJGyndYWNgeYIOjKeIPOqGsCEDUAJg0gJg0gJCgB6QHP2ro4J4FajAYGtSwGBrUYEK1IQ1ACpAKgBUAKgBUASVScqQgtMF7R91PAwmOBRoB86ALhQBnYxbOe/OkIhA1mU94/KgDaFMkPa9AFZwqH1R5ZfKgMEfuS/tDz/OkLApId1bgnLnu/lTAYGgAqF1ZeqlvuZlWUAvEx9ZQfSU8UOR7jnUWvAA+KwzxMFe2Y3kZSSki6b6NxHcbEHIgEWqlrwIgKgBMGkBIUgHvSAxgtdZRL9o+5T2j2jFKi4i2kStLBFogRUGhNESKREakIVIA9NkS7u+yiNPakPVjyBzbyBq5aezbuawvL4L1p7Nu5rC8vgqkhjGQZmPO24vkDmfO3hUJKK6PJU1Hs8kGS3DhUCI1AGkKYyQFICQoAqxWG3kZxqgBP4SwU+4sKmoZi34JqGYt+DNqBWbMEm8oPMfHjQMuFAD0AOKAKsV6DfhPypACQThvHlQIIU0wDcLOu6YpVLQsbkA2ZG06yInJX58GAAOgIg1kAbHYNoWUEho3BMUi3CyAa/hcXG8hzHgQTU13QikGoMCYNIB70sAALHXcUTaok+qqewlsGaKk6xbCpoqrcCDiVMlVOJBxKmWq2itogRUSLNzZeNMWGZ4wgl64KXKqzBWQkWJ0zU1qptddTcUt2evfGDZTa66W4pbs9e+MGfiJ3kYs7MzHixJP8qzznKbzJ5ZmnOU3uk8ssggy3zpoveRqfAfPwNJLjLBR4yyYhDuin1ju+bZL8TThHdJIIx3SSAhUCBoQG6jwoGiwUx4JAUYAuw+ki+1DKPchcfFKuo/yXlMuox7S8pmFWczBGExG6bE5HzoDJpLKvtL7xQSLFIPEUwJUAQmHZPgflQDMBCRY8aiQNHC4m+Ryb50DDkNIA7C4kBTFIu/A7JvpkDkwG/Gx9CQAkBu+xuMqhJd11Ao2vspoN1w3WYaS/VTAboYjWORf8uUcVPiLg3qrqICBqID3oAt2ds+WeRYYIpJZmzCILmw1Y8FXvOVd+dkalydCc1X1NLavRnG4QBsXhJoUPrndkjGdgGkQkKSedqVWqhJ4lwKvUQlw+DPbD1t9Xk1+rKZIKqlUVyrBJIazyrKZQBnSs8olEolLLVTRW0FYFuxKncj+auF+Uhpw6SXyHX0kvl+QVs/Ab4Mj3WBPSYaseCJzY/Cp1U7k5S4iv9wi2qncnKXEV38vwh5pN43sANFA0VRoo8KhOW55ITlueSeCS80I/1UPkDcn3A06Y5sj8x0xzZH5oyl0qooDMGezbkfnnQiSCKYyVAEZZd0Ejkw/iUqfgTTi9vI09vJlVArFQArUsCGtQAXg8QwYLvZE2z7+/hTisvA0svBqsNRxzB7joRTaw+STTXDOdFQKxxQBoYTF8G8j+dIZpD6j50mBv9FwZJ0wjANBiZI45UOaspYDeHsutyQwzB7rg02cLcuqGcs6hWZQSVV3VSbXKqxAJ77AUpIiK9RwB61/4furE2MBt1xTDldL9XeUPbLIb25fPivKurq01Zz4NGpWJns8sYYFWAKkWIIBBB1BB1FZTOeJfaD9nbYQtisGjPg8zJELs+H4l4xq0XNdV7xpu0ms9X7M/d/Q2abVere2XQ4Iwgi4sQcwRmDXc2xlHdHodfapLcugFPh6zTqM86zPmhrHOszSgCSR1mlEzyia2w9jbwOIlfq8MAwJy3n1Uqo4cRz5c6u0+l3/iTeIfm/kadLo969bY8Q/N/IltLG9YQqqEhTKNBwHM82NR1Fu97YrEV0RHU3eseIrEV0X7/MAkkA191ZTI+CCYtlJK5HdZe8bwsSO+1x50Rm4vKCM3F5QPao4IF2FextwNCGg21SwSFagC2LDhzuk2UAs55Ig3mPwt5ip1V73jt3+hZXXveO3f6GLVJnDMFsqab/Dicjn6K/xHKrq9NbZ7q/gvq01tvux/35hcmyoYv8fEpvexCOtbwLaDzq56auv/AJJ8+Fz/AOFz01Vf/LZz4XL+4M00BISGBmJ0MsjXJ5bqWHxqlyqbxCGfm/2RU5VN7a4P6v8AZYKcJD1h3srBhdQSMtbAm9Up5eSiPLya5csSxFiSSfM3+tTm90myyT3SbZjmIEd4JF/AmqSkGZCDY/14UCJLSAPweL3cm9H5fypDR23QAj+0MOTopkf/AG4ZH/41Rd7jGcTAxKgnU5nxOZpy6kSyogbmwNqzYSZMTh2CzJcZ5q6m29G44qbDvBAI0r0t2n9dHjqjrW0etjx1PoboT0wg2jFvp2J0sJoWI342PH9pDwYa9xuBxpwcHtl1OXKLi8S6nRmokTyb7QPs7ZC2MwEdwSWmwy2z9qTDjg3EpoeGeR26TWSoeHzHwa9Lq3S8PlHmZVXXeXMH+iCOB7q78XCyO6LyjtxcbI7o8oz8Th6z2VmeyszZoaxWVmSUA7CdrClf1U17fsyrcH+JT76jBN1OPh/qThl0OP8A1f5NAbrVDiZ2g7E9GJ99gqjcBADMyIGyFyL8L3q6egsy8dPJfL0dam8Ljy+5H+6uI5wf7n8qj/b7PMfuR/t1vmP3G/upieAjPg6/W1P+3X9sfcf9sv7Y+5TL0bxS/wCST4MjfWoS0GoX+JCXo7Ur/B/kTi2bNu+g28NVKsr/ALoOTjwN+6o/0tmOjz4/3qRWltx058f71KhVGDOH7OWMpMjyrHvKq7zexvXkC8yQFFu+temUHGalLGUl9O5s0qg4zjKWMpL6Z5x8S3Y/VO4iweFEkl1HWTkasbLZe88rVdTKrlUwzjlyl/BfTKnlUQzjlyl4+R1fTfobisNhusxEwkLq1ljLIiOF3t3dFt7IaknjU42rU1z5baXHZfb+Rq3+prnmTylnHRfZfueRGuIcQ0ti7RaLfiVVIm6pSSM13JkkUqeBulvAmp1Z3rHlE6871jyjQkhCYmdBpvAj97P61o1MFC+UV5NOogoXyivJbVOCoy9GYftH4m/1qt9Sl9SRUHI0mAPJAVz4c/zpCEKQHY9ENqKWK9kYzqZ44GZgiTNJC8aJIxyWQb3ZY5N6JsbNVNkRnMrEydhlZWXssrAqQRkQQcwQQRRLqIlekAZhnr1VUjt1yNnZeNlhlTEQSGOdPRYZgjijj1kPEGp36aN8fj2ZO3Txuj8ezPdugvTWLaCFGAjxiC8sN75adZGfWjPPhoe/z1lUq5bZLk4llcq5bZdTq6gQPOPtB+z7ri2MwSqMUc5YslTEcyDokv7Wh48606XVT08srp3Ro02plRLK6eDyMqGvkwZSVdWBV0Yaq6nNWHKvR12Quhugd6E4XQ3QAMThqpsrKJ1kdjJ+keHhLEwH44zvr/yrJXHFrj5X6FdEcWuH/ZP7rkpkiqqUCmUAedL5tnYce1p41RYuOSmxZ6nZfZB0Zixjbstt1t9zktyEIUKLjLMk3q6mSp0jt2ptvHKLqGqdI7dqbbxyjQ+1volBgUvh1HbTeGSb6brqG7QANiD8DU1YrtLOW1KUccokrFdpZy2pSWOVx3PKo9pzr6M8w8HcfWuZG+2PST+5zo6i2PST+50uA2piCkTLi0d3WYmMoGaNojkH7mUgg+I4Vu02s1MpbVLs/wAjdptdqpS2qfbPPwAppzIxkNrtmbAKDlyFZ5zc5bn1ZnnN2Scn1ZG1QwQwF9AMRFHjTHLK0QfJJAu+ElVg0Zca7uoyzuRV2judc3FLO7jBZo7nXY4pZ3cYPXumP3iVoY5545Iim+rRIUQubhgGJIcgeGR0FdTQKqKnsi0+mG+cHZ9HV05moxafRpvnB4f0p2C+FmIsTCxujWysfVPIjSuRq9M6pvC9nscbXaSVFj49nsT6MbMLSCZxaJO1c5AkaW8NfKr/AEfpnOfrJe7HnJZ6P0znP1kvdjzklBP1ss0vBmy8Bp8LVnts9bbKfllFlnrbJT8sJqIsGTiXAlYHiQfeBVMupRLqTU1ERdGaQFcuE4r7vy/KkBTu3BA1Nx56WpAdR9ohH9qYlV0UxJ5x4eJD8VNUV+4v97gznr1IROCSvQwmdSEjTw01ba5muuZpYeVg6Sxu0c8Z3o5F9JG+oIyKnIgkVO+iF8MS69mW3UwvhiXXye19AOna40fd5wseOVblR6EqjWSG+o5rqO8Z15y+idM9sjgXUyqltkdrVJUcT0+6Brjb4mArHjlFt45JMo0Sa3wbUd4yq6i+dM90S6i6VMt0TxaeFgzxSI0c8Z3ZI3yZD9VOoYZEZivSUXw1Ecx690d+m6F8cx6+DPl/RSRzfq5FJ/CTut8Caz6iOzbPw1/DKbV6uUbPDX26MM2nhN2RgNL3Hgcx86ldXyW6irE2Zc8OR8DWKyHDMNkOGdJ9l+NQwtCWZJUcukiHdkQMBmp9ZbggqdRyqWhblVt647Po1+3zL/Ry9ZS4Llrs+jX7fM6XpDsvrmIkkmcSRBesdhIJGsd8o3BRcdg2YcbVvqalTKtpLrwuML4/ydCiEbKpVNJdeOmPn/J4rj8G8MjROLOhsfoR3HWvN2VuuTjI8tbVKubhLqg7o+dwyTn0Y42/ibsqvnnWrRew5Wvok/u+EaNH7DlY+iT+74RdhPQXwFUw6IhDoXWqRIzdpYcg9Yt++2oI41VOOHlFM4tPKOw6OfaLLHGYZoxKmV7jeD203luLN+0CDW6vVxkvxE9y6SXU6FevU0lanuXSS6kdrdMhIbRYdgmtpJFYgnUXVe0OV8+d9avj6Ukl7uf98F/92s24ccmVj8ZPPGFJREbOyBiSASLEk92neKq1OrutgovCT8GfUaq66Ci8JPwD4PDlF3bg530t9awqODHGOAmmSMbaw/SeKj5kVVPqUWdQeGUjvH9aVAgHwuDpSGFIaTAIXCjcbEnSBoWcDVlaVVsO+oN/4+QA9qY77xicRiM7SzySDuDsSB5Xt5VHbtSQA9LAFMb12IyNcZBkE1aoWGmEzTw2IrbXYa67DRjkuVYMyuhDI6ndZGGjKeBqy2mF8Nsy6yqF8dsj1/7PftA+8kYPGFVxluw47KYkDUr7Mg4p5jK4HnNRpp0SxL7nAv086ZYl9z0IVnKDlum/QuLaCBwerxaAiKYC5A13JB68Z5cNRVlVsq5KUXyTrslXLdF8nhe19myRvJhMRH1eIVc11DKchJG3rIefDQ2Ir0FV8NXU49JY6Hcrvhqq3Hvjp/BYjdbBDKfSKbrfiQ7rfEGran6ymMn1xh/Q2RfraITfXGH80AywVXOBnnWY6JLBL10IPZux0AsTmDnpeualZTPfWjnxVlNm+tdDrIOnpVbGB87b6ncZGt3bwII4MLEd1a5aqEuZRaflY4N09fCeHKDUl3WDH2vtbCTtvNh5z+Lc3h3b6sCw8bVGepotS9bXlrx/9KrNVRcvxq235XH7mJjnaW0ccYigU3C5XJ9pramsN9js9iMdsV2/kw3TdnsQjtiu38l8cdgANBlUUsLBFLCwStQA4500NA+0YwJXsOyWuPBu0PnRbFKTwFySm8A9qrwVBuFluqpxBc+R3LfHeqe7KSLd2YqIRaoiEaBHP4ubfctw4eA0rNJ5Zmk8sqFIiWxkjMa0gNHCy73DMa/nSYzSmlAwOIF83kwqDvF5nP8A8BVf+aAxRSYh6QAatXSTL0y+OSrYyLYyDIJq1QsNEJmnhsRW2uw1wsNBSHFjfIgggkFSMwykZgg8RV84QtjtmaJRhbHbI9X+z/7Qi5TBY5gJjZYZzZVm5I/BZfg3DPI+c1WknRLD6dmcHU6WVEuenZnplZTMYPS7orBtCLq5QVkW5ilW3WRNzU8QeKnI+6pRk4vdHqOMnF5XU8Rn2PNgZJMFigA5kaWFxfq5kPpGMniCbldRflnXc9G6lSUoSfOc/fqd/wBGamM4Srk+c5X16g0sNdKUDfOAOuHvvLb0kcf9pI+IFUOHVfAoVecrymYTxZeVYXHg5+3gHeOqJRKZRLyMyeYVvMqN74g0pr2gmvaFaq8EMCtSwIcCjAYKccO0DzRf+3sf8adnOH8B2c4fwBrVXgrwW4b0x5/L+VLuLHIfUiYBtPEZbg/e8OVV2PgqsfBkmPlWczkRSAsWgC+CVkYMpIYaHL5HIjuORpAdBJs9cbAZMMN3ExfpJsMLkOijObDcSBc70eZW+WWQrzteH9xmCpoEPSEAg1uLSatU0yaZfHJVsZFkZBkM1aoWGiEzRw2IrZXYa67DRBV1KsAVOoNaWo2R2y6Gt7bI7ZdD0v7PvtAMZTBY6QlTZYMSx8hHOfa4B+PHPM+f1milQ8r3ThavRypeV7p6zWExmX0i2DBjYTBiE3lvdSOy8bjR421VhfXy0oTxyhptco8U6Q7EmwEohxHajc2gnAssv7Dj1JbcNDqK7+i16sWyzr58nf0XpBWJV2dfPkz9yzA8j/8AtdJx5Ontw8mPNhrEjkSPjl8LVkcOpglXjKApYazygZpQKYkzI7vkf51nccMp28lhWoOJBxG3ajgjga1RwGCrF6L+97srfWiXRCk+EDWqOCOCUWTA94+OX1pYEGzEhSRramSZjyrkaqmuGUzXBQDWczj2vrQAup5UhjjvoA6XoAf/ADCE8hOf/bTVTd7j+n6gc3FoPAVJ9RFl6QANbCY4NPIyampJk0y6N6tjIsUguGatMLDRGZpYfEVtrsNVdhpRyBhusAVIsQcwRWrMZrbJZTNakprbJZTO96BdPmwm7hcY5bB5LFOxJaDgqTHjFwD+rkDlmOFrdA6fajzH9DjavROp7o8x/Q9lRgQCCCDmCMwRwIrnGAF2tsyHEwth541khcWZWGR5EcQQcwRmCKAPFulXRmXZrdtmkwTG0c59KMk9mPEd/APoeNjXa0PpDpXb9H/J29D6R6V2/R/yYM8GZ77H6fQV1nDk6socgE0FUzgZ51gZisw939fCsk4cmScMMTx1VKJXKJWVqpxK3Ejao4INFOJXIHkfnlUGiMkD7tLBEVqTQB7LcEcxTJGRIvZPgahJcMqkuGAisZkJqaALkpDLgoOopAanROURY6Mk5CPEtc5W/wCmmFV2LMft+oGPgMJJIAER2yGgNvM6ClOcY9WI0P7v4n9Uf4o/zqr19f8A2A5+ukTFQA4NMZJTUkySZcj1bGRbGQXDLWmEy+EzRw+IrZXYaq7DUgmBFjpWyMlJYfQ2RmpLDOz6C9N22eRBOWfZ+gObPhr8uLQ92q8Msq4mt0Dr/Er939Dk6zQuHt1+7+h7ZhsQkiLIjKyMAyspDKykXBUjIgjjXLOaNi8MkqNHIivG4KsrAMrKRYgg6igDxnpj0MfZ15od+TZ3G93kwt+DHV4f2tV43GddXQ+kHXiFnu/odXQ+kHXiFnu/p/4c08YIuLEHMEZg13cJrKO80msoCxEH5+7Os9kMmWyshJFVEoFEoAzx1RKJTKJUVqpxKmiqdeyfC/uzquS4K5LgFtUcEMCtSaAMi0HhTQwCWPUeNRa4INGODWAwk1NAFyUgL0pDD9kYFZMUu/fdERe2gNnK2PMa/KqL5uNbaA7deXCuQ8vqBLepAeR16ckKgBUAIGmMmDUkySZaj1ZGRZGQXDLWmEy+MzRw+IrZXYa67DUw+IrbCeTZCeep1PQnpfJs1t0hpMAxu8Y7TQE5mSEezxKeYzvfka70fj8SpfNHN1mhx+JX9Ue6YDGxzxrNE6vE4DKym4IPEVxzklzqCLEXByzoA8j6adA2whbFYJGbCklpcOvaaG+ZfDjinEx8OGWQ6Gj10qXtlzH9Do6LXyoe2XMf0OOXddQ6kFSLgjQ16GLjOOY9GeiTjZHdHoyt4arlAplAFkirPKBnlAGeOqJRM8olTJVUolUogISqsFWBbtLAsBEGlA0UTJ2jUWRaOfkFiR31z5LDZz5LDY60hFy0gL0pDN/o6P0z53Cwxgd2+TIR7yax6v3F8wOkDVzgJXowB5PXpSQqAFQAqAEDTAmDTTJplqPVsZFikFQy1ohMvjI0MPPWyuw1QmauGxFbYTysGyE8rDNb7OOkuI2c8ypvS4ZJAZcPfPq3zEsBOkgsbjRshkbGuA9HKTmo9Yvp8Dj/ANFKe/Z1i+nwPoLY21ocVCuIgkDxOLgjgeKsNVYaEHMVgMAbQB5n056AsGbG4BO0SWnwwsFk5yQ8Fl5ro3jrs0msnQ+Pd7o2aTWT08uPd7o4GB1kXeXmQQQQVI1VgcwRyNejrshbHdF8Hpq7IXR3QfBXJFSlEhKALJFVEomeUAaRLVRKJnlEzp5EBN2HvrPJpGeWECPjoxxv4VRK2CKXbFFX9rgZBT51U9QuyKnqEugNLtJyb6e6q5XtlbvbAnJJvVDeShvI6GkItU0hhCGkBvdFbXmbmyL/AArn86xaz/FAdEGrABLeoA8rr0hIVACoAVACoAV6AJA1JMkmWo9WRkWJhUMtaITL4yNDDz1srsNMJmnsWa2LXlNG0Z/EvaU/AinCW3Uxl2ksfU0aae3VLxJY+p0+xekUmz5jNh2VgSOvw98pR7SgehLybjoaq1+lrn7db9rx5IekNLXPM62t3jye3dHNvwY6AYjDvdDkwPZdHHpJIvqsOXnpnXDawcFrHDNOgDgunfQQzscZgt1MZb9Ih7MeJAGQf2ZBwfyOWY0afUzolmP2NGm1U6JZj9jyd8RISykFJEJV0Zd10YaqwN/516Oi5Xw3RfzPQ1X+vhuizOxTOfWb5fKoWQZXYpGRiUPEn3msNkGYZxYBJHWOUDLKBQy1RKOClxwVtVbK2Muelz4AmokS1cK59Q+dhSAg6FSQw0IF+FzmM6AJrSAvQ0gNLYayLEZQziNpWG6nVhmsouwZlbmMrcDTs08ZVqcl3wWeqfq9/l4NEbSNuw8l/wDUEUg8OwqGsjog+xWWf2nLzj/22/8AsqH9PWBxFdYkKkAqAFQAqAFQAhQBIGpJkkyxHqxSLFIKilq+Ey6MjRghLixU256W7wa0bozWJGhLesMOgw2IjHYdHUeo3ZI8G4+dSrd1XuPK8PqXVxvqXsNNeGaOwulMmCxAnjvDMbCSKXsxYhB6rMMri/ZfUX5EiqdT6q/lrbP49H9SjU+ru6rbP49H9T6C6J9J4NoQ9dCbEZSRtbfib2WHyOhGlclrDwzlNYeGbdIRxvTzoMmOHXwlYscgskluzIB/lzAekvI6rqL5g203TqluiW03TqluieI7QEscrYeTDSriI/TTsAC+hDEgMp1BGtd2vXK5YjFt/Q7detVyxGLb79ACXCTN/lxqP2nLH3KPrUZRvl/il9SMoXS/xS+oJJst/Wcfur9Sayyon3f5GaVE+7/IpOzVGpY+Jt8qolRjqUOn4jDCoNFX3VS60it1pFgqtoraHBqDRHAMuOaGYsoRlZQHSRd+ORfZdcssgQQQQQCCDUJLJBhuI2RHMpnwJZgAWkwrHengHEof8+Ie0BcD0gNagpNPEhFODwarEcQ5VrKWVQbrcabx4m/DhVU7Hu2IZsJF1ccUR1VAW/HJ22+Y91b9Z7KhX4X5vk2an2Iwr8L83yQmwgbtDJ+fA9zDjWHPYyNFH3eX2E/j/lR7IYOTreSGoEKkAqAFQAqAFQBOJLm17d+dJsaDYcPHxa/wpbpFiSD4Ao9EL5WqSky6LQZHLV8JmmMw2CettdhqhMU562QQs5WNo3Y2WNiShGXaBtkTVkvxrFW3hNMJL1tqqbwmn28fMO2AhwLifBSSJOP1jB45FvcxyIAAVPdYg2IpT9F1uHsN5+JCfoylwxW3u+J7n0M6XRbQiJUGPEJYTQsQWjJ4g+uh4MNe43FcWdcoScZLk4k4ShJxkuTpKgQOb6Z9EIcfGLnq8SgPUzKAWQ+yw9eM8VPwOdTrslXLdHqTrslXLdF8ni+Pwc0Epw2Jj3MQueVykq/rIWPpL3ajQ16LS6yN62viR6HS6yOoWJcS/wB6AE8NWzgWzgZ80VY7IGKcAORaxzgZZRKSKzyiUSQqqaKmjO2gO2PD6mq2VsrglZWDqzK6kFWUlWUjQqwzB76i0I2VxYxUkcboFmeQGV0siSxr2naWMC3WZX31tfO4vnU9PUpWxT6F2nhvtjF9M8/I1Zpd92bmSfLhUdRZ6yyUviO6z1lkpeWWJWZlRZakB5/XSGKkA1AhUgFQAqAFQBKM50gTCBQSJCpZJJlqOeZqaZYpBmDeR3WNCN9zujeJsMibn3VfDMpKMerL4SnKSjHq/Ia25HLC3WSSP1hRmPYSzqUsicBnqauwq7ISzl5w/HPgve2uyEtzbzh9lz4NLDYiunCw3V2GjhcRJHImIgkMeIj9BxnlxRx66HiDUdTpoaiPPXsw1OmhqI89ezPZOg/TWPHqYnAixqC8kRORGnWRH14yfMXseF/N21TqltkuTzltU6pbZLk6yqysxulPRuDHw9TMpuDvRyLYSRPwZG4eGh404ycXlDjJxeUeIbc2TPgpvu+KAub9VMotHOo4r7Ljih04XGdd/Sa5W+xP3v1O9pNarvYnxL9f/TJxEdaLIl9kTOnSsNkTFZEEcVkmjLJFTMBqazyKJGfjZASLXyvVLKWVLURGlsIHfdxwXcB8fS+GXnUozcU8dycJ7c48GwjcDkfgfCqGIKSoMBvvI5N7jSEcJXRJioEKgBqBCpASVCdAaMjwXJhDxNvjUXIeAiPCqOF/GoNsMDmAcDRuHggYSKluENU0yWQ7Yrf9TB/6q/G4rRp3+ND5mnSv8eHzFtF/TI1DFh+616d8ve+f7iulzLHn9w6HEXzGhzHnWyu3PJqrszyaWGxFboWG2uwORjvJIjtHPGd6ORMmRu7mDoVORGRp30Q1EcS6k76IaiOJdfJ6/wBAunC4z/psQFjxyi5UZJMo1khv8V1HhnXm76J0y2yPOX0TpltkdrVJSZ+3djQYyFsPiIw8beRUjRkbVWHAijOAPCelvRufZ0gSa8mGc2hxFsjyjmt6Enfo3DO4HY02u3exZ17P+TrabW7vYs69n/JzOMYCr7uC63gyJ5W8PD86wTyzFPII1ZpIzyRVKMh41SypjKKiIL2Xi+qO43oscj399JoDoQLiq2SLUQ6ajv18O+oCCaQzz2uiSFTETWMnhSGWLh+Z91LIbS1YVHD351FseC0VEY4NIB70CHBpASBpAKgYRshB96h7mLfwKW+la9HzfE0aTm+H+9EDsb377/Gluzkpcs5BsJOQoF9MvdUqp8Dqlxg0YMSfa+VbYWPya4Tfk08PjSORHuNbIWyXPU2QukviaW8GCkMyupDI6Eq6MMwyMNDV1tcL4Yl9/BfZXC+GJffwer/Z70++8EYPGFVxlv0cgsqYkDio9WUcU46jLIed1GnlTLDPPajTypliR6FWcoMDpbtfARRmDGsjLMCBDutM8g47sSAsbcwMuYoSb6AeHbZ6G4rrHbC4bFNhALx9cYI5QDqu6ZLsBbIkA93E7qrpLiSyaYarHEuTi5wQzKwKspsykWII4EVJzUi3epLKBzWeZTIrlGVUsqZBagRLdwEWOlIDS2RiyD1LnP1DzHLxFRkuMjTNxKqGW0hHn1dIkKkBdE9A0y8Gokh6QD0sAPekA96BDg0gHvSAcGkAVso2eWThHA9jyeTsL8zWzScb5+EzRpuN8/EX93wDCs6ZlTAhkzDvv76lF4Y4vDCI3rRCZfGQZDNWqFhphM0sHicrcvl/XyrVVZ2NNVnGAx3DCxvqCCCQQRmGUjMEHjV1m22O2ZdPbZHbLlHqP2efaLvsmBxzgTGywzmwWbkknBZe/RvHXgajTypljt5OFfQ6pY7eTldnbcDYvEvPbrpcRKu+dQscjJHF3KqqAPOtelrSq39y2qCVe46WHFzEtEZSsbIyI1xZN5CATlvbwcg3BsAKhbBt8GK6POTJ6W9AvvEZmj3UxQJKgM8qlbD9GXYbzi9yDbLesMhnRj7lEL3FnkWIhdGaORSsimzKdR+Y76g5ZNqmpLKK7XyqtkWUpUCIQlJgauGgWTB4kZCSNsNMjesAJTC+etr4iM+QqtvEkAVsrFlwVbKRMmHyYdxpSXdDRo2qAHn9dIkOENAFgjtQPA6takMtVqiBK9IYqAHvSEINSwBIGkAt6hoGFxEphuG9O++efVx9lPe28fKtT9ihLvJ/ki5vZRjvJ/kgYGsqMqYLiMnB5i3up9wzyOpqyMixMuR6ujItjIJgmsaujZhl0Z4Yck9aY2mhWDyuGUqwBB1FEpKS2voEpKS2sHgY77K7FgxZwzElizEbxJ4tqb8bms1a2PY+nYw7dj29ux13RzpGQRBO2WiOeXJvz/oSk+eTPau6O/wO2RGAsh7JyU5sb+yAMz9PCs80c2ayZ3TDoiuOTrAgjmAujXDP4MBkQeVz76payRru9WzxrHYGWCQxTIVce5h7SniPlVTOhGamsoBYkEgAm2ZtwFLGSWMlsMgbLjy0NRYG50eXekaLL9NBPDqR2miYxaf6qx1VPyAGXI3MQg7QUEj2lOZXxqMXhuDG/If/AHgw/tN/CafqmLJzIFdAuwSoEKkAxFAEQaALA9LAC6ylgCJajAhCngC5WvUGhlcxuQg46+FRZGT7Bk0pY3PIAAaBVFlUdwFSnNzeWE5uTyyIqCIFGNXIHkfnTBlQNNMaZMGpqRNMmGqakWKQSstXKZYpExLUt5LeVzm443GYtqD3VCbyiFjyieGxG8bNbeAy/aB1I9wqMbMvkxuR1XRnb+4QkxJS26jnPqxy/CeeunAZDZltjnoelbL2nu2VjeM6HW35ioMxSRxn2rbRw0hGFjVZMVcMzA9mEe0WHrkery14VB88I16SmbeexxeEwyou6M76k6k99TSUVg66iorBm47AhTe36M6HihPC/KqJrHQonHDyTweIkgdJLFgjKwI9IbpBzHHSqmlJEAnCTKQdw3UMwXh2d47uXDK1U2RwySJ9QnsL7hUd0h4MOuqTHpCFQA9ICJFMBqQDigBUCHtSyAxe2dJsTZbh0t2j6R+HdVRDqXigBxQBDEi6Ed3yzpgCqcqAJCgeSQNSTHksjapbiSkTDU9xLcLeo3BuK5BxF+YtYEHmPqKi2VTWQvB4re7Jyce494oUjPOLRrYXpJPGjYeIgkjJjn1V9SO/Wwp8vhChp98sgmHiCjiSTdmOZYnUk1Ykoo6UYqKwXrUWxNlm4CLEXBFiKqbK2wBoDGbHND6Lf8W7+R41U0VNDNgVY7wur+0uR8+dQ3eQG+5Tfrx/AtR9jwPLMgV0SwVDAVIB6QCoAiaAFQBIUASaogVPqvjUZkJBgqCIIkKBjigBm+h+lMAGLQeFAiwUDFQMmlMCYpkh6AGbQ+FIiUv6afiFLuRn0D9kegfxGr6e5fT7oetNlrLFqtlbLkqpkGQx3+E3hUGRZVFVbIl9RGf/2Q==')
            .addField(`=play [URL/TITLE/PLAYLIST]`, `Plays good quality music :wink:`)
            .addField(`=stop`, `Stops playing music and clears queue.`)
            .addField(`=volume [0 - 150]`, `Sets volume of music.`)
            .addField(`=skipto [number of song in queue]`, `Skips the queue to song what you wrote.`)
            .addField(`=pause`, `Pauses current song.`)
            .addField(`=forceskip`, `Force skips the song`)
            .addField(`=remove [ALL/Position]`, `Removes the song or other.`)
            .addField(`=nowplaying`, `You can now see whats playing.`)
            .addField(`=queue`, `Queue of the songs in your server.`)
            .addField(`=shuffle`, `Shuffles songs you have added.`)
            .setFooter("")
            .setColor(0x1ab517)
            message.author.sendEmbed(embedt)
           var embedth = new Discord.RichEmbed()
           .setTitle("Fun Commands")
           .setDescription(":smiley: Some Fun Commands :smiley:")
           .addField(`=dankmemes`, `Dank memes generator...`)
           .addField(`=kill [mention]`, `Kills a user you mentioned.`)
           .addField(`=afk`, `Makes you afk so no one disturbs you!`)
           .addField(`=unafk`, `Makes You No Longer afk.`)
           .addField(`=cutecat`, `Sends a cute cat.`)
           .addField(`=hello`, `Says hello to Zoid / Responses: -good -bad -sad`)
           .addField(`=userinfo`, `Tells some information about you.`)
           .addField(`=pm [text]`, `PMs you the text you wrote | **FEATURE GLITCHED OUT!!**`)
           .addField(`=ping`, `Says Pong!`)
           .addField(`=8ball [Question]`, `You ask a question and Zoid randomly answers!`)
           .setFooter("")
           .setColor(0xf44141)
           message.author.sendEmbed(embedth)
           var embedf = new Discord.RichEmbed()
           .setTitle(`Moderation Commands`)
           .setDescription(`:hammer: Kicks, Bans etc. :hammer:`)
           .addField(`=kick [mention]`, `Kicks a member. | **REASONS OF KICKS NOT ADDED**`)
           .addField(`=ban [mention]`, `Bans a member. | **REASONS OF BANS NOT ADDED**`)
           .addField(`=joinhelp`, `Instructions how to set up autorole and join messages!`)
           .setFooter("")
           .setColor(0x29a7d8)
           message.author.sendEmbed(embedf)
           var embedfiv = new Discord.RichEmbed()
           .setTitle(`Pranks!`)
           .setDescription(`:rofl: With these commands you can prank your friends! :rofl:`)
           .addField(`=grass`,`Plays Spongebob mario remix in the voice chat you are!`)
           .addField(`=chilledwindows`, `Plays a windows error sounds music!`)
           .addField(`=airhorn`, `Plays little eisteins airhorn remix!`)
           .addField(`=brainpower`, `Plays whole song of Brain Power!`)
           .addField(`=fakeping`, `Sends a discord notification`)
           .addField(`=win`, `Plays a winner epic song!`)
           .setFooter("Made by Riskii | Zoid")
           .setColor(0xad0505)
          message.author.sendEmbed(embedfiv)
           var embedfi = new Discord.RichEmbed()
           .setTitle(`Secret Commands`)
           .setDescription(`:cloud_lightning: **SECRET COMMANDS**\nThere are some secret commands you need to guess! Good Luck! :cloud_lightning:`)
           .setFooter("")
           .setColor(0x42008e)
           message.author.sendEmbed(embedfi)
           message.author.sendMessage(`You can invite me here: https://discordapp.com/oauth2/authorize?client_id=389489277358047265&scope=bot&permissions=2146958591&response_type=code`);
           message.author.sendMessage(`I Am Partnered And Friends With Other Coders They Are @Telk (Account Disabled Currently) @123silly (Creater Of LightBlue)`);
           break;
           case "servers":
           message.delete("servers");
          message.channel.sendMessage(bot.guilds.map(g=>g.name).join(", "));
           break;
case "reloadthebot":
message.delete("reloadthebot")
console.log(`<@${message.author.id}> has reloaded LightBlue!`);
message.author.sendMessage("**Reload** -> To confirm please type -kill");
break;
         case "servers":
             message.delete("servers")
             message.channel.sendMessage("Join Riskii's Server:https://discord.gg/WnWdRc6 And https://discord.gg/EFh3q54");
            break;
            case "invite":
                message.delete("invite")
                message.channel.sendMessage("**Invite Here:**https://discordapp.com/api/oauth2/authorize?client_id=400360484697538570&permissions=8&scope=bot");
               break;
               case "bad":
                   message.delete("bad")
                   message.channel.sendMessage("Why bad? ;n; ");
                  break;
                  case "sad":
                      message.delete("sad")
                      message.channel.sendMessage("Why sad? ;n;");
                     break;
               case "hgg":
                   message.delete("invite")
                   console.log(`[SPY] Ohh yea! <@${message.author.id}> wants to invite me! :wink:`);
                   message.channel.sendMessage("You can invite me here: https://discordapp.com/api/oauth2/authorize?client_id=400360484697538570&permissions=8&scope=bot");
                  break;
                  case "kys":
                      message.delete("kys")
                      message.channel.sendMessage(":cry: why i need to kill myself?");
                     break;
                     case "magik":
                         message.delete("magik")
                         message.channel.sendMessage("M a g i k");
                        break;
                        case "zoid":
                            message.delete("zoid")
                            message.channel.sendMessage("**Zoid x Huncho**");
                            break;
                                  case "ping":
                                         message.delete("ping")
                                         message.channel.sendMessage("Your Ping Is 0ms");
                                        break;
                                        case "pm":
                                      message.delete("pm")
                                      message.author.sendMessage(args.join(" "));
                                      break;
                                        case "afk":
            message.delete("afk")
            console.log(`<@${message.author.id}> is now afk.`);
            message.channel.sendMessage(`**Notice:** <@${message.author.id}> **is afk! Dont disturb this user!**`)
            message.author.sendMessage().setAFK
            break;
            case "unafk":
message.delete("unafk")
console.log(`<@${message.author.id}> is no longer afk.`);
message.channel.sendMessage(`**Notice:** <@${message.author.id}> **is no longer afk!**`)
break;
case "support":
message.channel.sendMessage('Support Me At Paypal https://wwww.paypal.me/GDragon601')
break;
case "commands":
message.delete("commands")
message.channel.sendMessage("Sorry about that! The command is -chelp!")
break;
case "help":
message.delete("help")
console.log(`<@${message.author.id}> Wanted -help`);
message.channel.sendMessage("**Hi I'm Zoid #[Zoid x Huncho] Also Do -chelp :D!**");
break;
case "hcf":
message.channel.sendMessage("**Specially For @Plater#3777!**");
break;
case "userinfo":
message.delete("userinfo")
console.log(`<@${message.author.id}> is using userinfo!`);
var ui = new Discord.RichEmbed()
.setTitle(`--{ Zoid User Info }--`)
.setDescription(`<@${message.author.id}>'s Info:`)
.setThumbnail(message.author.avatarURL)
.addField("Account Created:", `${message.author.createdAt}`)
.addField(`Username:`, `${message.author.username}`)
.addField(`Status:`,`${message.author.presence.status}`)
.addField(`Avatar:`, `${message.author.avatarURL}`)
.addField(`Game:`, `${message.author.presence.game.name}`)
.addField("ID:", `${message.author.id}`)
.setFooter("")
.setColor(0xff0000)
message.channel.sendEmbed(ui)
break;
//--------------------
case "joinhelp":
message.delete("joinhelp")
console.log(`<@${message.author.id}> uses JoinHelp!`);
message.channel.sendMessage(`**How to use join?** First you need to create role called **Member** and create text channel named join-leave! `)
break;
//--------------------
case "kill":
message.delete("kill")
console.log(`<@${message.author.id}> killed someone...`);
let user = message.mentions.users.first();
var killembed = new Discord.RichEmbed()
.setTitle(`Aww! That hurts!`)
.setDescription(`${user.username} got killed by ${message.author.username}! I think that hurts!`)
.setThumbnail(`http://bestanimations.com/Military/Weapons/gun-animated-gif-7.gif`)
.setFooter(``)
.setColor(0xf4ad42)
message.channel.sendEmbed(killembed)
break;
//--------------------

case "slap":
message.delete("slap")
console.log(`<@${message.author.id}> slapped someone...`);
let usert = message.mentions.users.first();
var slapembed = new Discord.RichEmbed()
.setTitle(`Woah!! That was hard one!`)
.setDescription(`${usert.username} got slapped by ${message.author.username}! It might hurt...`)
.setThumbnail(`https://images-ext-2.discordapp.net/external/TP1AThYe88JEoR5DQJ-u__RgQYYc25_MVRMo6S8gK1M/https/cdn.weeb.sh/images/rJrnXJYPb.gif`)
.setFooter(``)
.setColor(0xf4ad42)
message.channel.sendEmbed(slapembed)
break;
//--------------------
case "roast":
message.delete("roast")
console.log(`<@${message.author.id}> roasted someone...`);
let rs = message.mentions.users.first();
message.channel.sendMessage(`${rs.username}` + roasts[Math.floor(Math.random() * roasts.length)])
break;
//--------------------



//--------------------
break;
case "serverinfo":
message.delete("serverinfo")
var sie = new Discord.RichEmbed()
.setTitle(`--{ Zoid Server Info }`)
.setDescription(`The information about this guild is here:`)
.addField(`Name:`, message.guild.name, true)
.addField(`ID:`, message.guild.id, true)
.addField(`Owner:`, message.guild.owner, true)
.addField(`Server Region:`, message.guild.region, true)
.addField(`Channels:`, message.guild.channels.size, true)
.addField(`Membercount:`, message.guild.memberCount, true)
.addField(`Server Created At:`, message.guild.createdAt, true)
.setColor(0xf4ad42)
message.channel.sendEmbed(sie)
break;
case "plater":
message.delete("plater")
message.channel.sendMessage("99% Same Skills As Riskii :D Wink Wink");
break;
case "cutecat":
message.delete("cutecat")
message.channel.sendMessage(Cats[Math.floor(Math.random() * Cats.length )]);
break;
case "kurltepes":
message.channel.sendMessage("Best Person <3 :heart: I love Kurl Tepes. But @Advison is trash tho");
break;
// --------------------------
case "dankmemes":
message.delete("dankmemes")
message.channel.sendMessage("Generated **DANK MEME**!")
message.channel.sendMessage(MemeL[Math.floor(Math.random() * MemeL.length )]);
break;
case "kick":
// Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send(":x: **No Permissions** :x:");
        });
break;
case "ban":
    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
      let banMember = message.guild.member(message.mentions.users.first());
      message.guild.member(banMember).ban();
      message.channel.sendMessage("Member banned.");
    } else {
      return message.reply(":x: **No Permissions** :x:");
    }
break;

// --------------------------

bot.on("guildCreate", guild => { //when the bot is added to the guild
guild.defaultChannel.sendMessage(`Oh hai there!\nSomeone just dropped me here... I dont know who!\nOkay im going to say some things about myself.\nI am **LightBlue*! Coded in Discord.JS and Atom.io by B4Galaxy (best dev <3)!\nIf you want to start using me please start with -help so you can know commands and other awesome things about me!`);
      console.log(`I have been added to: ${guild.namme} (id: ${guild.id}) (members: ${guild.memberCount})`); //sends consxxole message

    }) //end

    bot.on("guildDelete", guild => { //when the bot is removed from a guild

      console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`); //sends console the message here

    }); //end

// --------------------------

case "prune":

if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("An error has occured while clearing whole channel... :cry:")})
        }

break;

// --------------------------
case "grass":
message.delete("grass");
// Only try to join the sender's voice channel if they are in one themselves
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
      message.author.sendMessage(`Im playing **Grass.mp3** prank in the VoiceChat you are...`);
    console.log(`Joined a voice channel...`)
    const dispatcher = connection.playArbitraryInput('http://macius.bts.net.pl/Grass.mp3');
    dispatcher.setVolume(1);
    })
    .catch(console.log);
} else {
  message.reply('Error: Your not in a voice channel!');
}
break;
// --------------------------

case "chilledwindows":
message.delete("chilledwindows");
// Only try to join the sender's voice channel if they are in one themselves
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
      message.author.sendMessage(`Im playing **chilledwindows.mp3** prank in the VoiceChat you are...`);
    console.log(`Joined a voice channel...`)
    const dispatcher = connection.playFile('./chill.mp3');
    dispatcher.setVolume(1);
    })
    .catch(console.log);
} else {
  message.reply('Error: Your not in a voice channel!');
}
break;

// --------------------------

case "win":
message.delete("win");
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
    console.log(`Joined a voice channel...`)
    const dispatcher = connection.playFile('./win.mp3');
    dispatcher.setVolume(1);
    })
    .catch(console.log);
} else {
  message.reply('Error: Your not in a voice channel!');
}
break;

// --------------------------

case "airhorn":
message.delete("airhorn");
message.author.sendMessage(`Im playing **airhorn.mp3** prank in the VoiceChat you are...`);
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
    console.log(`Joined a voice channel...`)
    const dispatcher = connection.playFile('./airhorn.mp3');
    dispatcher.setVolume(1);
    })
    .catch(console.log);
} else {
  message.reply('Error: Your not in a voice channel!');
}
break;

// -------------------------

case "brainpower":
message.delete("brainpower");
message.author.sendMessage(`Im playing **brainpower.mp3** prank in the VoiceChat you are...`);
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
    console.log(`Joined a voice channel...`)
    const dispatcher = connection.playFile('./brain.mp3');
    dispatcher.setVolume(1);
    })
    .catch(console.log);
} else {
  message.reply('Error: Your not in a voice channel!');
}
break;
// --------------------------

case "fakeping":
message.delete("fakeping");
message.author.sendMessage(`Im playing **fakeping.mp3** prank in the VoiceChat you are...`);
if (message.member.voiceChannel) {
  message.member.voiceChannel.join()
    .then(connection => { // Connection is an instance of VoiceConnection
    console.log(`Joined a voice channel...`)
    const dispatcher = connection.playFile('./ping.mp3');
    dispatcher.setVolume(1);
    })
    .catch(console.log);
} else {
  message.reply('Error: Your not in a voice channel!');
}
break;
// --------------------------
            }
});

bot.login(process.env.BOT_TOKEN);
