tell application "Numbers"
	activate
	tell document 1
		tell active sheet
			tell table 1
				set value of cell "A1" to "指標類別"
				set value of cell "B1" to "項目"
				set value of cell "C1" to "GPT-5.5"
				set value of cell "D1" to "GPT-5.4 / 基準"
				set value of cell "E1" to "差距"
				set value of cell "F1" to "圖表值"
				set value of cell "G1" to "一般人解讀"
				
				set value of cell "A2" to "摘要"
				set value of cell "B2" to "發布日期"
				set value of cell "C2" to "2026-04-23"
				set value of cell "D2" to "-"
				set value of cell "E2" to "-"
				set value of cell "F2" to ""
				set value of cell "G2" to "OpenAI 官方產品發布頁"
				
				set value of cell "A3" to "摘要"
				set value of cell "B3" to "主要定位"
				set value of cell "C3" to "複雜真實工作 / agentic tasks"
				set value of cell "D3" to "前一代"
				set value of cell "E3" to "-"
				set value of cell "F3" to ""
				set value of cell "G3" to "更會規劃、跨工具執行、檢查結果"
				
				set value of cell "A4" to "可用性"
				set value of cell "B4" to "ChatGPT"
				set value of cell "C4" to "Plus / Pro / Business / Enterprise"
				set value of cell "D4" to "-"
				set value of cell "E4" to "-"
				set value of cell "F4" to ""
				set value of cell "G4" to "Thinking 開放給付費方案；Pro 面向更難問題"
				
				set value of cell "A5" to "可用性"
				set value of cell "B5" to "Codex context window"
				set value of cell "C5" to 400000
				set value of cell "D5" to "-"
				set value of cell "E5" to "400K"
				set value of cell "F5" to 400000
				set value of cell "G5" to "一次能看更長的程式碼或文件"
				
				set value of cell "A6" to "API"
				set value of cell "B6" to "gpt-5.5 input $/1M tokens"
				set value of cell "C6" to 5
				set value of cell "D6" to "-"
				set value of cell "E6" to "$5"
				set value of cell "F6" to 5
				set value of cell "G6" to "輸入 100 萬 tokens 5 美元"
				
				set value of cell "A7" to "API"
				set value of cell "B7" to "gpt-5.5 output $/1M tokens"
				set value of cell "C7" to 30
				set value of cell "D7" to "-"
				set value of cell "E7" to "$30"
				set value of cell "F7" to 30
				set value of cell "G7" to "輸出 100 萬 tokens 30 美元"
				
				set value of cell "A8" to "API"
				set value of cell "B8" to "gpt-5.5-pro input $/1M tokens"
				set value of cell "C8" to 30
				set value of cell "D8" to "-"
				set value of cell "E8" to "$30"
				set value of cell "F8" to 30
				set value of cell "G8" to "Pro API 輸入較貴，目標是更高準確度"
				
				set value of cell "A9" to "API"
				set value of cell "B9" to "gpt-5.5-pro output $/1M tokens"
				set value of cell "C9" to 180
				set value of cell "D9" to "-"
				set value of cell "E9" to "$180"
				set value of cell "F9" to 180
				set value of cell "G9" to "Pro API 輸出成本最高"
				
				set value of cell "A10" to "速度"
				set value of cell "B10" to "Fast mode speed"
				set value of cell "C10" to 1.5
				set value of cell "D10" to 1
				set value of cell "E10" to "1.5x"
				set value of cell "F10" to 1.5
				set value of cell "G10" to "Fast mode 產生 tokens 快 1.5 倍"
				
				set value of cell "A11" to "成本"
				set value of cell "B11" to "Fast mode cost"
				set value of cell "C11" to 2.5
				set value of cell "D11" to 1
				set value of cell "E11" to "2.5x"
				set value of cell "F11" to 2.5
				set value of cell "G11" to "Fast mode 成本是標準的 2.5 倍"
				
				set value of cell "A12" to "Coding"
				set value of cell "B12" to "SWE-Bench Pro"
				set value of cell "C12" to 58.6
				set value of cell "D12" to 57.7
				set value of cell "E12" to 0.9
				set value of cell "F12" to 0.9
				set value of cell "G12" to "真實 GitHub 問題修復略高"
				
				set value of cell "A13" to "Coding"
				set value of cell "B13" to "Terminal-Bench 2.0"
				set value of cell "C13" to 82.7
				set value of cell "D13" to 75.1
				set value of cell "E13" to 7.6
				set value of cell "F13" to 7.6
				set value of cell "G13" to "命令列多步任務明顯提升"
				
				set value of cell "A14" to "Coding"
				set value of cell "B14" to "Expert-SWE Internal"
				set value of cell "C14" to 73.1
				set value of cell "D14" to 68.5
				set value of cell "E14" to 4.6
				set value of cell "F14" to 4.6
				set value of cell "G14" to "長時間工程任務更強"
				
				set value of cell "A15" to "Professional"
				set value of cell "B15" to "GDPval"
				set value of cell "C15" to 84.9
				set value of cell "D15" to 83.0
				set value of cell "E15" to 1.9
				set value of cell "F15" to 1.9
				set value of cell "G15" to "職場知識工作小幅提升"
				
				set value of cell "A16" to "Computer use"
				set value of cell "B16" to "OSWorld-Verified"
				set value of cell "C16" to 78.7
				set value of cell "D16" to 75.0
				set value of cell "E16" to 3.7
				set value of cell "F16" to 3.7
				set value of cell "G16" to "操作真實電腦環境更可靠"
				
				set value of cell "A17" to "Tool use"
				set value of cell "B17" to "BrowseComp"
				set value of cell "C17" to 84.4
				set value of cell "D17" to 82.7
				set value of cell "E17" to 1.7
				set value of cell "F17" to 1.7
				set value of cell "G17" to "搜尋與瀏覽整合任務更好"
				
				set value of cell "A18" to "Tool use"
				set value of cell "B18" to "Tau2-bench Telecom"
				set value of cell "C18" to 98.0
				set value of cell "D18" to 92.8
				set value of cell "E18" to 5.2
				set value of cell "F18" to 5.2
				set value of cell "G18" to "客服流程任務大幅提升"
				
				set value of cell "A19" to "Academic"
				set value of cell "B19" to "GeneBench"
				set value of cell "C19" to 25.0
				set value of cell "D19" to 19.0
				set value of cell "E19" to 6.0
				set value of cell "F19" to 6.0
				set value of cell "G19" to "生物與基因資料分析提升"
				
				set value of cell "A20" to "Academic"
				set value of cell "B20" to "FrontierMath Tier 4"
				set value of cell "C20" to 35.4
				set value of cell "D20" to 27.1
				set value of cell "E20" to 8.3
				set value of cell "F20" to 8.3
				set value of cell "G20" to "困難數學提升明顯"
				
				set value of cell "A21" to "Long context"
				set value of cell "B21" to "Graphwalks BFS 1M f1"
				set value of cell "C21" to 45.4
				set value of cell "D21" to 9.4
				set value of cell "E21" to 36.0
				set value of cell "F21" to 36.0
				set value of cell "G21" to "超長上下文能力大幅提升"
				
				set value of cell "A22" to "Cybersecurity"
				set value of cell "B22" to "CyberGym"
				set value of cell "C22" to 81.8
				set value of cell "D22" to 79.0
				set value of cell "E22" to 2.8
				set value of cell "F22" to 2.8
				set value of cell "G22" to "資安任務也有提升"
			end tell
		end tell
	end tell
end tell
