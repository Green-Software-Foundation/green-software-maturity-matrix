---
title: Solutions
description: TBC
sidebar_position: 9
sidebar_label: Solutions
---

# Solutions

Start to list tools that are available that can help get to each level

## Level 1 > 2

Challenge - cut your resource use by 50%:

* Identify and switch off those zombie servers that aren’t doing anything (or anything much). Remember, this alone saved VMWare 66% on their emissions when they moved one DC in Singapore.
* Do a one-off right-sizing exercise on all your servers because everything tends to be overprovisioned to start with.
* Are you turning off your test systems in the evening and on weekends?
* Because of its extreme multi-tenancy, the cloud already uses only a fraction of the electricity of an on prem DC. AWS claims to be 3.4 times more energy efficient than an average US DC and 5 times more efficient than a European one. Move some stuff there. (Note - you could also call on your non-cloud hosting providers to be more efficient. That isn’t likely to pay off inside 6 months but you need to play the long game if you want to stay out of the cloud).
* If you are already in the cloud, review your instance types. Could you be using Burstable instances or autoscaling?

Pini Reznik of GreenOps consultancy re:cinq told us that, in his experience, "An average cloud system can cut its resource consumption by up to 50% just using ops best practice tuning and optimization." This is relatively straightforward stuff.

You can measure the scale of cut you’ve achieved by the reduction in your like-for-like hosting bills. Hosting cost is only a rough proxy for emissions but it’s good enough at this stage and it’s simple to explain and track. No clever tools required!

Hurray! You’ve saved loads of money and you are now working on level 2 of the maturity matrix.

## Level 2 > 3

Challenge - cut your resource use by another 30%:

* Make sure your hosting provider or operations team has extremely tough carbon zero hosting targets. Compare them with the cloud and pile on some pressure.
* Ensure machines are hosted on grids and in regions with a high renewable or nuclear mix (AWS currently has 19 100% renewable regions, for example).
* Choose only green platforms that are committed to a low carbon future and have a community that will hold them to that commitment. Move to those platforms if necessary.
* Choose an architecture that will support demand shifting and shaping (i.e. usually not on demand monoliths).
* Set high bars for operational efficiency and machine utilization because the best way to both cut emissions and embodied carbon is to use fewer servers. The public clouds are comparatively very efficient. Again, that is because of scale and incentives rather than saintliness. We don’t care. In most cases we can cut our emissions very significantly by moving to a public cloud and using its services well (‘lift and shift’ buys you something but you can move beyond it).
* Design products and systems to support demand shaping and shifting for carbon awareness.
* Do less and be LEAN in approach. Don’t build and save stuff before need.
* Make sure your software is never the final nail in the coffin for working end user devices because of the lack of backwards compatibility or security patches.
* Build basic performance metrics into your systems and do at least basic performance analysis. Resolve any egregious bottlenecks that you find (and you will). They are just bugs that are slowing you down, costing you money and emitting greenhouse gasses. Performance is often a good proxy for carbon emissions.
* Start to automate the right-sizing you did at level 1 and look at LightswitchOps so you can turn off systems at will if you think they are no longer used. You’ll need some simple metrics for that too so you can spot low activity servers.
* For code that has to run on demand, make it efficient.

## Level 3 > 4

* You analyze cloud builds e.g. cloud carbon footprint tool.


## Level 4 > 5


## Level 5