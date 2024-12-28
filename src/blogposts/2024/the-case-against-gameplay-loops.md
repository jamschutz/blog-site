---
layout: 'blogpost.liquid'
title: The Case Against Gameplay Loops
img: /img/against-gameplay-loops/deathloop-cover.jpg
date: 2024-12-28
tags: blog
---


{% capture intro %}
Recently I found myself playing _Tactical Breach Wizards_, the new tactics game by Tom Francis. I really liked it! I enjoy tactics games, and this one felt fresh and interesting, with good mechanical hooks and nuanced abilities. But at some point along the way, it began to feel stale to me. It was putting out a steady trickle of new powers, new mechanics, new problems, but foundationally it’s all pretty similar: you enter a room full of bad guys, then you clear the room of bad guys. I began to feel the old pull in my heart that maybe it was time for me to stop playing this game; and then, after beating a boss, the game declared in big bold letters: “Act 2 out of 5 COMPLETE.” My god…3 more acts and I’m already tired! So I put it aside and went on with my life.

This is nothing new for me. Chances are, this is nothing new for you either! Pretty much none of us are finishing games these days. Here’s a <a href="https://deathisawhale.com/2021/01/20/how-many-players-actually-finish-games/">random article</a> looking at Steam achievements (now public) showing almost no game even reaches a 50% completion rate amongst its players. Here’s an <a href="https://www.ign.com/articles/2014/03/17/gdc-most-players-donat-finish-games">IGN article</a> summing up a GDC talk that says companies’ internal data reveals the typical number is about 33%. But anyways I suspect you don’t really need data to believe me on this – we already know it. It’s obvious.

And for a while now I’ve been thinking about this phenomenon. What’s going on? It is very rare that I don’t finish a movie I’ve begun. For books, I track my reading habits and I finish around 85% of the books I start. For games (which I do not track diligently…) there is no way I am even hitting 33%. I do not finish games. But it doesn’t seem to be something about my media habits at large, which means…

It must be about the games themselves. This is maybe also obvious, but I wanted to think it through out loud. I wanted to be sure! Because really I think it might be a problem with gameplay loops…

{% endcapture %}
{% render 'blog/paragraphs.liquid' text: intro %}

{% render 'divider.liquid' %}

{% capture pt1 %}
Picture this: you are making a movie about a man aging into a world he no longer belongs in. You need a scene where he passes the torch. If you’re Luchino Visconti, you’ll shoot it as a dance, a grand waltz before an audience in awe of the mouldering beauty of a fading aristocrat.
{% endcapture %}
{% render 'blog/paragraphs.liquid' text: pt1 %}

{% render 'blog/youtube-embed.liquid' %}

{% capture pt2 %}
Now picture the game. It would be a cutscene. Or, worse, the whole game would be about dancing. You’d start as a young dancer, talented but raw. You’d have rivals and challengers as you grow into your craft. New locations and clothing to unlock, side quests and collectables. And it would end with Visconti’s scene, where you fade into elegance, a touching finale. And perhaps it would feel quite beautiful: a dying breath in the clamor of candlelight, made all the more beautiful by the repetitions preceding it. But let’s think about this…the story isn’t about dancing! It’s not about clothing or exotic travel, or side quests or trinkets, it’s about a fading aristocrat. In the film, we see them talk, they hunt, we see battles and political rallies. We see dinner parties and long walks. The action _changes_. Of course it does. And our game, which is now about dancing, we’ve lost all of this. We lost the grandiosity of the character. We lost his multifaceted nature, his quiet interiority. We lost the political climate’s bombastic reverberations. We have taken all of this and gone and made a game about _dancing_. We’ve made a game loop.

How did this happen? Well, let’s see how things developed for the film. We have a film about a fading aristocrat. We’ve thought about the story, what it means to us, and so we come to this scene hoping to reveal something.  Our aristocrat suddenly finds himself in twilight: he, and everyone in attendance, can see it plainly. The world is changing. So we take this meaning – this is our foundation – and we construct action to reflect it. 

For the game, we begin with the action – _this_ is our foundation – and the meaning can come later. We think we can make dancing mechanically interesting enough to repeat, and so we make a game about dancing. We have some mechanical developments we want to trickle out through the game’s runtime. We want to have a big story with a lot of locations and a lot of nemeses, so we’ll go ahead and commit to 30 dances and let’s just focus on making the dancing something you can do 30 times (we’ll have far fewer than 30 mechanical variations, but no bother). Within that, we’ll find a few set piece moments where we can reveal more about the character, or the historical context, or a thematic idea (still told through dance, or else a cutscene). And then at the end we’ll wrap with that lovely moment: the passing of the torch. And no one will play it, because who finishes video games?

Do you see where we went wrong? We approached it backwards. For the film, we began with the meaning and staged it accordingly. But for the game, we began with the action and grafted meaning into our tracks. But if the action isn’t born out of meaning…how did it get there in the first place?
{% endcapture %}
{% render 'blog/paragraphs.liquid' text: pt2 %}

{% render 'divider.liquid' %}

{% capture pt3 %}
How _did_ we get here? I think in some ways it’s a historical relic. For board games, which vastly predate video games, it’s much harder to have a game where mechanics are malleable. The designer writes the rules, and there they are. You read the rules, you play it, and if you had fun you play it again. The hope is that the play is rich enough to justify repetition. Put another way, the hope is each playthrough is meaningful. And this is accomplished because board games are _multiplayer_ games. I’ve played _Battle Line_ dozens of times with my roommate, and every time leaves us sweating over who’s going to win. And this grants the play its meaning. Every turn taken is a step towards or away from victory, which makes every step _meaningful_. Eventually we had played enough times to where one of us won more regularly than the other, and the meaning was lost, so we stopped playing. 

The core mechanic as a paradigm got solidified in video games through the arcades, I think. For coin ops, the need is interminability. We don’t ever want the player to stop playing (and paying), and this is best achieved through a core loop that addicts us. Whatever the play is, it should be looping, repetitious, infinitely extendable. Keep those coins coming. What grants arcade games their meaning is their high scores: arcades are social spaces. Like the combative meaning of _Battle Line_, _Space Invaders_ is granted meaning through leaderboards and face offs. Even if you’re just playing against yourself, there is a tension of getting farther, doing better, honing your craft and seeing it reflected in concrete terms. Everything you do in the game furthers this goal, which makes everything you do meaningful. 

But even as games moved to the living rooms, and slowly shed their points systems (which lost most of their meaning when divorced from the public arcades), it seems we’ve never quite shaken this idea of the core loop. For board games, it’s a quirk of the medium: the static rule book. For arcades, it’s a quirk of the market: keep players hooked. But for video games…I don’t see how it’s necessary. It can be a useful tool, certainly, but it’s not wielded as a useful tool. It’s an axiom of game design textbooks.

The other factor here is the medium’s obsession with playtime. My cursory historical sense is that this has always been a spector in the medium, haunting our production cycles and marketing campaigns. But it seems to have really taken on a life of its own around the 2000s and into the 2010s with the boom of the open world game. In the lead-up to its release, _Fallout 4_ producer Jeff Gardiner <a href="https://www.gamesradar.com/fallout-4-so-expansive-even-its-creators-havent-seen-everything/ ">told GamesRadar</a>, “I’ve played the game probably 400 hours, and I’m still finding stuff that I haven’t seen yet.” Todd Howard added, “I’ll be playing the game and run into something and be like, ‘Who built this? What is this? It’s so big!’” (God help us.) Bethesda excesses aside, there are real market pressures these days to make our games sufficiently long. How long is a bit nebulous, but at any waking moment there is a horde of redditors waiting to decry the futility of spending money on anything that won’t fill their time for fewer than 30 hours. For indies, the pressure to clear the 2 hour mark was hung ominously overhead when Valve updated their policy to allow refunds up to that threshold.

And, naturally, it is hard to build a 30 hour game (let alone a 400 hour one). And it also happens to be expensive. The most rational way to achieve this is to make a game out of reusable parts: rather than building scenes from scratch, we can build them from a library of props and assets. Rather than building out gameplay to suit the scene, we can build gameplay loops.

But this, of course, is not a very satisfying foundation. If our gameplay loops are just facilitators of content, it’s no wonder their games are left hollow and inert. It’s no wonder we stop playing them. Why bother if everything that awaits us is just fluff, filler, sound and fury? If we’re just hamsters spinning wheels?
{% endcapture %}
{% render 'blog/paragraphs.liquid' text: pt3 %}

{% render 'divider.liquid' %}

{% capture pt4 %}
By now you might be wondering if the problem is really gameplay loops and not runtimes. And it’s a fair question. Certainly, I think, many souls lie in the graveyard of The Thirty Hour Game. But I think there is something to this gameplay loop thing. Even smaller games, games made _before_ Steam’s 2 hour refund policy, have this hollowness…

I am playing _Nine Sols_ at the moment. Or, maybe I’m done with it now, I’m not sure. But the fact of the matter is that I’m enjoying it. It’s pretty fun. I actually like it even more than _Hollow Knight_, which I bounced off of. But recently I can’t shake this sense that it’s bloated. I’m not talking about huge runtimes, I mean at a smaller scale. As I move through its world, it’s well made, it’s pretty nice and it’s varied, but, honestly…when I step back about 95% of it feels unnecessary. I couldn’t tell you what purpose it really serves. 

I want to think of this another way. This year I read Linda Hutcheon’s _A Theory of Adaptation_, which is about...adaptation. She talks about how adaptations are these interesting creatures: the same story told over again. And she muses on the allure of these works. Why are we drawn to them in the first place? One of the things she settles on is this idea of repetition and variation. That a good adaptation has both, the familiarity of a source text with the variation of an interpretive overlay. She talks of this idea of the palimpsest (and has this great term “palimpsestuous” which we should all start using), where you can feel two things at once: the old and the new. The repetition and the variation. And it is this two-things-at-once quality that drives a lot of the power of adaptations. In contrast to adaptations, she brings up the sequel: the sequel is not really an adaptation. It is not an interpreter of its predecessor, but rather an “expansion.” It’s there to continue the story. It’s there because you want more.

I think that’s what’s going on with _Nine Sols_. I don’t want to pick on it, because actually I like it – I think it’s better than most games – and yet it still has that hollowness when I look closer. In Hutcheon’s terms (and she certainly would disapprove of them being applied here, but I can rest easy knowing she will never read this) _Nine Sols_’s gameplay feels like an expansion. They found something interesting to do once, so why not do it again? and again? and again…? And they’re not alone! I think this is the de facto way of making games right now.

I think as game designers there is this sense that good design is turning up every possible use case of a mechanic, leaving no stone unturned. But it isn’t especially compelling for me to see all the different ways a designer found for me to use their lockpick mechanic. A good case study was _Cocoon_ from last year. A game filled to the brim with what any game design textbook would call excellent design. It takes a simple (if brain-boggling) idea of nested dimensions and spends a few hours showing you every which way it can be thought of. It was an impressive display! But I didn’t like it. I found it cold, and dull. The design was impressive, certainly, but I couldn’t figure out how my role as a player fit meaningfully into its design. It felt like its entire _raison d’être_ was to prove they could stretch one mechanic, one loop, for three hours. And by Jove they did it! But I can’t figure out what for. What was the point?

The whole premise of the core loop game is to figure out a thing you can do for hours and hours. Refine that mechanic until it’s something broad enough and bendable enough, without specificity, to be deployed in a thousand different contexts. And then you go and make a lot of stuff with it. It’s a harsh delineation between the form (the mechanics) and the content (what you do). And usually it leaves me feeling unmoved. Usually it leaves me feeling like neither has much of a purpose. The content is there to justify the mechanics, and the mechanics are there to give you something to do with the content...and we never make anything with a real purpose. What is any of this for?
{% endcapture %}
{% render 'blog/paragraphs.liquid' text: pt4 %}

{% render 'divider.liquid' %}

{% capture pt5 %}
So, what now? Should we give up the ghost? Loops can never work? 

Despite everything, I actually think this is a structure that can be useful! But for it to work, it needs to be used with intention, not simply because it’s how games are made. First, I want to look at how artists in other media have used this structure, because I think it might be helpful for thinking about games. What does it mean to use loops with intention?

In music, there are actually a lot of cases of repetitious structures. One famous example is Erik Satie's <a href="https://www.youtube.com/watch?v=sKKxt4KacRo">“Vexations.”</a> It’s a very short piece that bears the inscription: “In order to play the motif 840 times in succession, it would be advisable to prepare oneself beforehand, and in the deepest silence, by serious immobilities.” No one knows if Satie was joking, or if he actually meant the piece to be repeated 840 times. It was never performed until 1963 when John Cage gathered a group of pianists to play the whole enchilada. From the <a href="https://en.wikipedia.org/wiki/Vexations ">Wikipedia page</a>:
{% endcapture %}
{% render 'blog/paragraphs.liquid' text: pt5 %}

{% capture wikipedia-quote %}
Cage set the admission price at $5 and had a time clock installed in the lobby of the theatre. Each patron checked in with the clock and when leaving the concert, checked out again and received a refund of 5¢ for each 20 minutes attended. "In this way", he told Lloyd, "People will understand that the more art you consume, the less it should cost." But Cage had underestimated the length of time the concert would take. It lasted over 18 hours. One person, an actor with The Living Theatre, Karl Schenzer, was present for the entire performance.
{% endcapture %}
{% render 'blog/quote' text: wikipedia-quote %}

{% capture pt5b %}
So here, of course, the repetition forms the joke. It’s a gag piece, and the sheer, absurd scope of it creates the humor. We can see there is a purpose to the repetition!

More seriously, we can look elsewhere: the most famous example must be Ravel’s <a href="https://www.youtube.com/watch?v=3WS76eKIJJA">“Bolero.”</a> The whole point of the piece is the shimmering variety of tones and textures: the same theme played over and over, but reorchestrated, reframed, revivified. Hutcheon’s repetition and variation. This is a piece that can _only_ work through its looping structure. More examples include rounds, like Moondog’s “<a href="https://www.youtube.com/watch?v=WEgRobOU13Q">Bumbo</a>” (not strictly a round I guess but certainly repeating); or the <a href="https://www.youtube.com/watch?v=lTaX7FQF0hY">zen reiterations of the minimalists</a>. In all of these cases, repetition drives its meaning. It is core to what the composers are trying to do, and it cannot be extricated from the music.

Within poetry, you have ghazals and sestinas, two forms built heavily on the gathering power of repetition. In addition, poets frequently use repetition not as a rigid formal structure but as a literary tool. Take Frank O’Hara’s <a href="https://allpoetry.com/Having-A-Coke-With-You">“Having A Coke With You,”</a> where he repeats the word “partly” five times in succession to drive home the fact that he has countless reasons to love someone. 

Within novels, you have structures like episodic novels. One of my favorite forms is the picaresque novel, which features a lovable social outcast who proceeds through a series of comedic episodes. Usually there’s little plot: it’s more about illustrating theme and character through scenarios, and in this way its looping, episodic structure allows the character to be put through changing contexts to prismatic effect. Their roundabout structure creates an enigmatic meaning that can’t be arrived at more directly.

The final example I want to look at is the Sondheim song <a href="https://www.youtube.com/watch?v=3Xz1TUgdG6A ">“I’m Still Here.”</a> I think it’s a good example of the power of repetition. Sondheim takes a core idea and turns out all its subtle meanings. “I’m still here” means the singer’s survived everything. It means “here” as in the big times. It means outliving a thousand political moments and tide changes; being forgotten and abandoned; doing bit jobs in the margins. It means remembering why she’s still around. And as this same refrain repeats and repeats – I’m still here. I’m still here. – it gains and gathers momentum, all of its deposited meanings silted in its underbelly, swollen to a tide of relentless obstinacy: she has never gone away. She will outlast all of us. It is a theme built on repetition.
{% endcapture %}
{% render 'blog/paragraphs.liquid' text: pt5b %}

{% render 'divider.liquid' %}

{% capture pt6 %}
So let’s think about games.

We want to make a game about mastering a skill and overcoming the odds. To master the skill, we’ll need to repeat it, and practice it. To really _feel_ like it’s a skill to be mastered, we’ll need to fail, perhaps even a lot. We should feel threatened, and vulnerable, to make a game about prevailing. Otherwise there is no triumph. This is how _Dark Souls_ works. It works as a loop, and it works well. You fail and you loop: this generates triumph. You repeat your small set of skills: this generates mastery. It works! And everything in the game is built around this. The world is oppressive and labyrinthine, enemies are brutally powerful and intimidating. And you loop through this disempowerment until you come out the other side.

I think this is how most games view the purpose of their loops. It’s for the player to master a skill. But most of these games aren’t really about that. In _Assassin’s Creed Odyssey_ you have an RPG skill tree that unlocks new abilities, lets you get better and better at fighting and sneaking. And, I suppose you could make a case that the game is about an assassin honing her craft. But...actually it really isn't. It’s about someone trying to find who her real family is. Or it’s about exploring ancient Greece. Or it’s about choosing sides in the Peloponnesian War. Or...something else. I’m not really sure what it’s about, honestly, and anyways it doesn’t matter. Let’s say it’s about an assassin honing her craft. Nothing in the game really supports that. The world doesn’t feel oppressive or vulnerable, it hardly matters if you get better or not, it’s quite easy; it’s impossible to get lost; you never fail. I don’t really feel like my skill in that game improved, as I played it. It felt more like…the game just kept going. It takes a lot of work to make this structure meaningful!

But let’s suppose these games did make this work. Let’s say all these games achieve the difficult task of creating meaning through play, feeling mastery through repetition…it’s not that this is a bad use of play, but I have to believe it is not all play can offer us. I hope it is just a small fraction of what play is capable of! So why is this all we’re doing? Why can’t we hope for more?

Let’s look at another example. I want to come back to that sense of “hollowness” I felt with _Nine Sols_, because it’s a feeling I find often in games, even games I enjoy. One such game is _Celeste_ (sorry!). I think it’s well designed, and feels good to play. But when I think about the work holistically…I honestly don’t feel like most of its levels are necessary. I think if it was 30 minutes it’d probably be just as good. I think many of its levels don’t mean much. And I think probably much of its design was driven by a sense that: this is how games are built. We build mechanics and then we loop over them, rearrange the deck chairs, play the hits. If it was fun once, it’ll be fun a second time. And it is! But I don’t think it means anything more than that, which is a shame.

But take _Getting Over It_. This is a game that, for me, uses its mechanics for real purpose, real intention. Crashing to the beginning has weight and impact. It’s what gives meaning to the ascent: the perilous risk of losing progress is the point. In virtually all cases this results in a looping structure (go up, and crash down; go up, and crash down), but again this loop has meaning. The point is to ultimately break out of it, through your own power. In _Celeste_, the loop feels more like a design obligation. I don’t really see what meaning it brings to the work as a whole. When I compare climbing in _Getting Over It_ to _Celeste_, I feel a visceral connection to _Getting Over It_ that I don’t feel in _Celeste_. I think its prolonged, looping structure actually waters down what it’s doing. I don’t feel like I’m climbing a mountain, I feel like I’m playing through a gauntlet of single screen platform levels. I don’t feel like I’m playing a progression. I feel like I’m playing a gameplay loop.
{% endcapture %}
{% render 'blog/paragraphs.liquid' text: pt6 %}

{% render 'divider.liquid' %}

{% capture pt7 %}
So where do we go from here? Honestly I would like fewer gameplay loops. I don’t think they’re being used very meaningfully right now. I think they are just content machines and nothing more. And this is sad!

There are cases, certainly, where it can make sense to use a loop. Perhaps your game is one of those cases. But I would like us to really think about it. I think we are all skipping that step, of asking ourselves: why this structure, and not another?

To return to the idea of not finishing games, I want to think of it a different way. When I watch a movie, or read a book, I want to reach the end. I want to see how it wraps up. How can we understand a work if we never see its finale? But in games, we inevitably reach a point where we’ve seen everything, and there’s no reason to keep going. And, despite there being more story, art, locations and music, voice acting and collectables…mechanically, we are right. And we know we’re right. We’ve seen everything. From here on out, it’s just a matter of doing what we’ve already done, over and over again. It’s a matter of looping.

But there are other ways to build a game. _Oikospiel_, _The Beginner’s Guide_, and _Thirty Flights of Loving_ are just a few examples. A better world is possible! Let’s build it.
{% endcapture %}
{% render 'blog/paragraphs.liquid' text: pt7 %}