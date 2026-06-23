---
title: "Why Transform Data? The Log Transform"
date: 2026-06-23T00:00:00Z
tags: ["statistics", "regression", "data transformation", "explainer"]
---

Linear regression makes several assumptions about your data. One of them — homoscedasticity — is that the spread of your outcome variable should be roughly constant across all values of your predictor. When it isn't, your standard errors and p-values can be unreliable.

In [Investigation 002](/investigations/002-daytime-sleepiness-and-depression), the data violated this assumption. The fix I tried was a log transformation — and what happened next was instructive.

## The Problem: Heteroscedasticity

After merging the sleep and depression datasets, I plotted PHQ-9 depression scores by daytime sleepiness level. The pattern was clear: people who reported never feeling sleepy had PHQ-9 scores tightly clustered near zero. As sleepiness increased, the spread of depression scores grew — people reporting frequent daytime sleepiness were scattered across the full range of PHQ-9 values, from 0 to 25.

This is heteroscedasticity: variance that increases with the predictor. It's common with right-skewed outcomes like PHQ-9, where most people cluster near zero but a long tail of higher scores creates uneven spread.

## The Fix: log(y + 1)

The log transform works by compressing large values more than small ones. A PHQ-9 score of 20 becomes `log(21) ≈ 3.04`; a score of 2 becomes `log(3) ≈ 1.10`. The high end of the scale gets pulled in dramatically, which tends to equalize spread across groups.

Because PHQ-9 scores include zero — about 1,700 participants reported no depression symptoms — a plain `log(y)` transformation isn't possible (`log(0)` is undefined). The standard fix is `log(y + 1)`, which shifts every score up by one before transforming. This is a common convention when count data includes zeros.

One thing no transformation can fix: a structural spike at zero. All 1,700 participants with PHQ-9 = 0 become `log(0 + 1) = 0` regardless. The spike stays. With n = 5,060, the central limit theorem provides enough protection against non-normality in the residuals to proceed anyway — but it's worth knowing the transform didn't make the distribution fully normal.

## What Happened: The Transform Overcorrected

The log transformation reduced the heteroscedasticity — but didn't eliminate it. In the residual plot, the spread of residuals *decreased* as sleepiness increased, rather than staying constant. The original problem (spread growing with the predictor) had reversed direction (spread shrinking with the predictor).

This is a real outcome worth naming: transformations are not guaranteed to fix assumption violations cleanly. Sometimes they improve the situation without resolving it. In this case, the residual heteroscedasticity was noted as a limitation of the analysis.

## The Interpretability Cost

Log-transforming the outcome variable creates an interpretability problem. The regression produced a slope of 0.311, meaning each one-level increase in daytime sleepiness frequency was associated with a 0.311-unit increase in *log-transformed* PHQ-9 score. Nobody has intuition for log(PHQ-9 + 1).

The standard way to recover interpretability is to exponentiate the slope: `e^0.311 ≈ 1.365`. This means each step up in sleepiness frequency is associated with PHQ-9 scores that are approximately **36% higher**. That's more communicable — though still less intuitive than a raw-score slope would be.

This tradeoff is real. Log-transforming improves statistical validity at the cost of making results harder to explain to a non-technical audience.

## When Else Would You Use a Log Transform?

**Right-skewed distributions.** Income, population, reaction times, viral load — many real-world variables have a few extreme values that create long right tails. Log compression pulls those in and makes the distribution more workable.

**Multiplicative relationships.** If doubling X tends to double Y (rather than adding a fixed amount to Y), the relationship is multiplicative. On a raw scale, that's hard to model linearly. On a log scale, multiplicative relationships become additive — a constant increase in log(X) corresponds to a constant proportional change in Y — and linear regression handles them cleanly.

**Stabilizing variance.** When the spread of a variable grows with its mean (as with PHQ-9 and sleepiness), log transformation often brings that spread under control. It's one of several tools for this; robust standard errors and alternative model families (Poisson, negative binomial) are others.

## When Not to Transform

Log transformation only works on positive values. For data that includes zeros, `log(y + 1)` is the workaround — but be aware it's an approximation. For data with negative values, a different approach is needed entirely.

And if the heteroscedasticity or skew reflects something real about the data — a genuine subgroup, a floor or ceiling effect — transformation can mask that signal rather than fix it. It's worth understanding *why* the data looks the way it does before reaching for a transformation.
