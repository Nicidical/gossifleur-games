if __name__ == "__main__":
	f = open("learnsets.ts", "r")
	newString = str(f.read()).replace("export const Learnsets: import('../sim/dex-species').ModdedLearnsetDataTable = {","{").replace("};","}")
	f.close()
	f = open("learnsets.json", "w")
	f.write(newString)
	f.close()

	words = newString.split(" ")
	print (words)


