---
title: "What Does R² Mean?"
date: 2026-06-22T00:00:00Z
tags: ["statistics", "regression", "explainer"]
---

My regression of daytime sleepiness on depression scores ([Investigation 002](/investigations/002-daytime-sleepiness-and-depression)) produced an R² of 0.158. Two questions immediately came to mind: Is that good? And does it mean daytime sleepiness *causes* 16% of depression?

The answer to both is no — but unpacking why gets at something important about what R² actually measures.

## Starting With Variance

Before R², it helps to think about variance — how spread out your outcome variable is. If you asked me to predict someone's PHQ-9 depression score without any other information, my best guess would be the average score for everyone in the dataset. Some people would be close to that average; others would be far off. That spread — the total variation in Y — is what we're trying to explain.

When we build a regression model, we're hoping to do better than just predicting the average for everyone. We're saying: knowing something about a person (their daytime sleepiness score, say) should help us predict their depression score more accurately than the average alone.

## What R² Actually Measures

R² tells you how much of that spread your model accounts for.

An R² of 0.158 means the model's predictions are 15.8% closer to the actual values than simply assigning everyone the average. The remaining 84.2% of the variation in depression scores is unexplained — it's due to other factors, measurement noise, or just the inherent unpredictability of human experience.

So R² is best understood as: *how much better are my model's predictions than a baseline of "everyone gets the average"?*

## Common Misconceptions

❌ The model is 16% accurate.

❌ Sleepiness causes 16% of depression.

❌ We can predict depression with 16% accuracy.

❌ 84% of people don't fit the model.

✅ The predictor accounts for 16% of the variability in PHQ-9 scores in this sample.

The accuracy framing is wrong because R² isn't a measure of prediction accuracy — it's a measure of explained variance. The causation framing is wrong because R² says nothing about why two variables are related. And "84% of people don't fit" misreads what residual variance means — it's not that the model fails for most people, it's that most of the variation in depression scores isn't explained by sleepiness alone.

## Is 0.158 Good?

It depends entirely on context. In physical sciences, where relationships are tight and measurement is precise, an R² of 0.158 would be poor. In health and behavioral research — where outcomes like depression are shaped by dozens of unmeasured factors — it can be meaningful. There's no universal threshold for "good."

What 0.158 tells me here is that daytime sleepiness has a real, detectable relationship with depression scores, but it clearly isn't the whole story. That's not a failure of the model; it's an accurate picture of how complex the phenomenon is.

## R² as a Measure of Fit — With Caveats

R² is commonly used to evaluate how well a model fits the data, and that's reasonable as far as it goes. But it has a critical flaw when used to *compare* models: it always goes up when you add more variables, even if those variables are noise.

A model with ten predictors will almost always have a higher R² than a model with two, even if eight of those predictors are meaningless. This means chasing a higher R² can lead you to overfit — building a model that fits your training data well but fails to generalize.

For comparing models, better tools exist: **adjusted R²** (which penalizes for added complexity), **AIC/BIC** (formal criteria that balance fit against parsimony), and **cross-validated error** (how well the model predicts on data it hasn't seen).

R² is a useful summary of how much variation your model accounts for. It's a poor tool for deciding which model to use.
