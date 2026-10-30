<!--
Copyright (c) 2026 Ferrun contributors. All rights reserved.

Responsibility: Explain the controlled matcher used by the live reporting action.
Connections: reporting-probe/action.yml registers matcher.json and
reporting_contract.py compares the resulting diagnostic events.
-->

# Controlled matcher fixture

This input tests the runner's matcher registry. Independent Rust tests also consume the pinned checkout and setup-node configurations.

| JSON pointer                           | Explanation                                                            |
| -------------------------------------- | ---------------------------------------------------------------------- |
| `/problemMatcher`                      | Supplies the action command's actual configuration array.              |
| `/problemMatcher/0`                    | Registers one controlled matcher so removal has an unambiguous target. |
| `/problemMatcher/0/owner`              | Names only this canary's registry entry.                               |
| `/problemMatcher/0/pattern`            | Defines its ordered recognition pattern.                               |
| `/problemMatcher/0/pattern/0`          | Matches one controlled compiler diagnostic line.                       |
| `/problemMatcher/0/pattern/0/regexp`   | Captures a file, line, column, severity and message independently.     |
| `/problemMatcher/0/pattern/0/file`     | Uses capture 1 for the existing fixture source file.                   |
| `/problemMatcher/0/pattern/0/line`     | Uses capture 2 for the independently known source line.                |
| `/problemMatcher/0/pattern/0/column`   | Uses capture 3 for the independently known source column.              |
| `/problemMatcher/0/pattern/0/severity` | Uses capture 4 without changing the command's exit status.             |
| `/problemMatcher/0/pattern/0/message`  | Uses capture 5 for the run-correlated annotation message.              |
