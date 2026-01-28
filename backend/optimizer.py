import pandas as pd

def get_optimized_allocation(risk_score):
    """
    Logic: 
    - Risk 1-3 (Conservative): 70% Debt, 30% Equity
    - Risk 4-7 (Moderate): 50% Debt, 50% Equity
    - Risk 8-10 (Aggressive): 20% Debt, 80% Equity
    """
    if risk_score <= 3:
        return {"Equity": "30%", "Debt": "70%", "Strategy": "Capital Preservation"}
    elif risk_score <= 7:
        return {"Equity": "50%", "Debt": "50%", "Strategy": "Balanced Growth"}
    else:
        return {"Equity": "80%", "Debt": "20%", "Strategy": "Wealth Maximization"}