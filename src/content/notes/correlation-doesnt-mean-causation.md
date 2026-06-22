---
title: "Why Correlation Doesn't Mean Causation"
date: 2026-06-22T00:00:00Z
tags: ["statistics", "correlation", "causation", "explainer"]
---

"Correlation doesn't mean causation" has become something of a rhetorical tic — deployed whenever someone wants to dismiss a finding without engaging with it. But the idea behind it is genuinely important, and more interesting than the cliché suggests. Correlation isn't meaningless. It's a clue. The question is what to do with it.

## Four Explanations for a Correlation

When two variables move together, there are four broad explanations:

1. **A causes B.** Sleep deprivation causes depressive symptoms.
2. **B causes A.** Depression causes sleep problems.
3. **Something else causes both.** A third variable — a confounder — drives both sleep disruption and depression independently.
4. **Coincidence.** The correlation is a statistical artifact with no meaningful explanation.

A correlation coefficient can't tell you which of these is true. That's not a flaw in the statistic — it's just a limit of what correlation is designed to measure.

## Reverse Causation Is Underappreciated

Most people intuitively grasp that correlation doesn't prove A causes B. Fewer think carefully about the reverse direction.

In the case of sleep and depression, the causal arrow could plausibly run either way. It's easy to assume sleep deprivation causes low mood — that matches everyday experience. But depression itself commonly disrupts sleep: rumination, anxiety, and hyperarousal can make it hard to fall asleep or stay asleep. Someone lying awake at 3am worrying isn't sleep-deprived and *then* depressed; they may be depressed and *therefore* sleep-deprived.

This matters because the intervention changes depending on the direction. If sleep loss causes depression, treating sleep might help mood. If depression causes sleep loss, treating sleep alone might not help much at all.

## Confounders Can Work Both Ways

The classic concern about confounders is that they produce spurious correlations — two things look related only because a third thing is driving both. But confounders can also *mask* real relationships, and this gets less attention.

Suppose chronic illness causes both poor sleep and depressive symptoms. In a dataset, chronically ill people might sleep more than average (due to fatigue or sedating medications) while also scoring higher on depression. That pattern would pull against a negative correlation between sleep and depression — making the relationship look weaker than it actually is.

This is a plausible hypothesis for what happened in [Investigation 001](/investigations/001-sleep-and-depression), where the correlation between sleep duration and depression scores was negligible (r = −0.058). The near-zero result might not mean sleep and depression are unrelated. It might mean that a real negative relationship (more sleep → better mood) is being partially cancelled out by a group of people who sleep a lot *and* score high on depression — because illness is driving both. That's speculative — we'd need to actually control for health status to know — but it's worth naming as a possibility.

## A Negligible Correlation Isn't the Same as No Relationship

There's another reason a correlation near zero doesn't mean "no relationship": it might mean *no linear relationship*.

Pearson's r measures how closely two variables follow a straight line. If very short sleepers and very long sleepers both tend to have worse depression scores — with people in the middle doing best — that's a U-shaped curve. The upward slope on the left and the downward slope on the right would largely cancel out in a linear correlation, producing a coefficient close to zero even though a real pattern exists. You'd need a scatter plot, or a model that allows for non-linear terms, to see it.

A negligible r tells you that sleep duration alone doesn't predict depression score in a straight line. It doesn't tell you there's nothing there.

## What Researchers Do Next

The goal isn't to throw up our hands at correlation. It's to use correlation as a starting point and then do harder work.

**Control for confounders.** Add suspected third variables to a regression model and see whether the relationship holds. If the sleep-depression correlation strengthens after controlling for chronic illness, that supports the masking hypothesis. If it disappears, illness may have been driving the whole thing.

**Establish temporal order.** Longitudinal studies measure the same people over time. If sleep problems consistently *precede* depressive episodes (and not the reverse), that's evidence for the A→B direction. Correlation alone can't tell you which came first.

**Look for natural experiments.** Sometimes external events change one variable for reasons unrelated to the other — a policy shift, a natural disaster, a random assignment. These quasi-experimental designs can isolate causal effects that observational data can't.

**Run a randomized controlled trial.** The gold standard: randomly assign people to conditions (a sleep intervention vs. a control group) so that confounders are distributed evenly. Any difference in outcomes is much more likely to be caused by the intervention.

None of this is easy or fast. But it's how the field moves from "these two things move together" to "here's why."

## Correlation Is Where the Question Starts

The correlation between sleep and depression is real and consistently replicated across studies. That's not nothing. It's what prompted decades of research, refined measurements, and better models.

Dismissing a correlation because it "doesn't prove causation" misses the point. The finding is an invitation to ask better questions — about direction, about confounders, about what a more careful study might reveal. That's how science works, and it starts with noticing that two things move together.
