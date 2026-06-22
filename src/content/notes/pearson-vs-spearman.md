---
title: "Pearson vs. Spearman Correlation"
date: 2026-06-22T00:00:00Z
tags: ["statistics", "correlation", "explainer"]
---

When you want to measure how two variables move together, you need a correlation coefficient. The two most common are Pearson and Spearman. They're related, they often produce similar results, and it's easy to reach for Pearson by default — but they're measuring different things.

## Pearson: Linear Relationships in Raw Values

Pearson's *r* measures how closely two variables follow a straight line. If you plotted them on a scatter plot and drew a line of best fit, Pearson tells you how tightly the points cluster around that line.

It works well when:
- The relationship between the two variables is approximately linear
- There are no extreme outliers pulling the line around
- The spread of data is roughly consistent (what statisticians call *homoscedasticity*)

The normality assumption that comes up in connection with Pearson is really about the *residuals* — the distances between each point and the line of best fit — being roughly normally distributed, not strictly that the raw data forms a bell curve. In practice these go hand in hand, but it's worth knowing the precise version.

## Spearman: Monotonic Relationships in Ranks

Spearman's *ρ* (rho) works by converting each variable's raw values to ranks — first, second, third, and so on — and then computing what is essentially a Pearson correlation on those ranks.

This matters in a few situations:

**Ordinal data.** If a variable is measured on a ranked scale (pain level on a 1–10 scale, survey responses from "strongly disagree" to "strongly agree"), the raw numbers don't have consistent meaning — the gap between 1 and 2 isn't necessarily the same as the gap between 4 and 5. Spearman respects that; Pearson doesn't.

**Outliers.** Because Spearman only cares about rank, extreme values are contained. A billionaire in an income dataset is just "the highest-ranked person" — not a number large enough to distort the correlation. Pearson is much more sensitive to extreme values.

**Curved but monotonic relationships.** A monotonic relationship means "as X increases, Y consistently increases (or consistently decreases)" — but not necessarily at a steady rate. Pearson requires that the rate be roughly constant (linear); Spearman only requires the direction to be consistent. If income and happiness have a relationship that flattens at higher incomes, Spearman will pick that up; Pearson may underestimate it.

## Which One to Use?

Pearson is the right default when you have continuous data with no obvious outliers and a roughly linear relationship between variables.

Reach for Spearman when:
- Your data has extreme outliers
- One or both variables are ordinal
- You suspect a monotonic but non-linear relationship

Both produce a p-value indicating whether the correlation is statistically significant. In practice it's reasonable to report both — if they agree, you have more confidence in the result. If they diverge, that's a signal worth investigating.

| Pearson | Spearman |
| --- | --- |
|Continuous variables | Ordinal or continuous |
|Linear relationship | Monotonic relationship |
|Uses actual values | Uses ranks |
|Sensitive to outliers | Robust to outliers |
|Assumes equal spacing | Does not |

## In My Own Work

[Investigation 001](/investigations/001-sleep-and-depression) used both. The PHQ-9 depression scores were heavily skewed — most respondents clustered near zero — which made Spearman more appropriate than Pearson alone. Reporting both provided a sanity check: the two coefficients were close (−0.058 and −0.043), which gave me confidence neither was being badly distorted by the distribution.
