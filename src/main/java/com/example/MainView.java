package com.example;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.router.Route;
import net.objecthunter.exp4j.Expression;
import net.objecthunter.exp4j.ExpressionBuilder;

@Route("")
public class MainView extends VerticalLayout {

    private final TextArea display = new TextArea();
    private String lastResult = "";
    private boolean resultDisplayed = false;
    private boolean errorDisplayed = false;
    private boolean darkMode = false;

    public MainView() {
        display.setWidth("300px");
        display.setHeight("100px");
        display.setReadOnly(true);
        display.setId("display");
        add(display);

        String[][] buttons = {
                {"AC", "C", "%", "+"},
                {"1", "2", "3", "-"},
                {"4", "5", "6", "/"},
                {"7", "8", "9", "*"},
                {"00", "0", ".", "="},
                {"(", ")", "Theme"}
        };

        for (String[] row : buttons) {
            var rowLayout = new com.vaadin.flow.component.orderedlayout.HorizontalLayout();
            for (String label : row) {
                Button btn = new Button(label);
                btn.setWidth("60px");
                btn.addClickListener(e -> handleButtonClick(label));
                rowLayout.add(btn);
            }
            add(rowLayout);
        }

        setWidth("350px");
    }

    private void handleButtonClick(String value) {
        if (value.equals("AC")) {
            display.clear();
        } else if (value.equals("C")) {
            String current = display.getValue();
            if (!current.isEmpty())
                display.setValue(current.substring(0, current.length() - 1));
        } else if (value.equals("=")) {
            evaluate();
        } else if (value.equals("Theme")) {
            toggleTheme();
        } else {
            if (resultDisplayed || errorDisplayed) {
                display.clear();
                resultDisplayed = false;
                errorDisplayed = false;
            }
            display.setValue(display.getValue() + value);
        }
    }

    private void evaluate() {
        String expression = display.getValue();
        expression = expression.replace("\u00D7", "*");
        expression = expression.replace("\u00F7", "/");
        expression = expression.replaceAll("(\\d+(\\.\\d+)?)([\\+\\-\\*/])(\\d+(\\.\\d+)?)%", "($1$3($1*$4/100))");
        expression = expression.replaceAll("(\\d+(\\.\\d+)?)%", "($1/100)");

        try {
            Expression exp = new ExpressionBuilder(expression).build();
            double result = exp.evaluate();
            String resultStr = (result == (long) result) ? String.valueOf((long) result) : String.valueOf(result);
            display.setValue(display.getValue() + "\n= " + resultStr);
            lastResult = resultStr;
            resultDisplayed = true;
            errorDisplayed = false;
        } catch (Exception e) {
            display.setValue(display.getValue() + "\n= Error");
            errorDisplayed = true;
        }
    }

    private void toggleTheme() {
        darkMode = !darkMode;
        if (darkMode) {
            getElement().getStyle().set("background-color", "#222");
            display.getStyle().set("color", "white");
            display.getStyle().set("background-color", "black");
        } else {
            getElement().getStyle().remove("background-color");
            display.getStyle().remove("color");
            display.getStyle().remove("background-color");
        }
    }
}
