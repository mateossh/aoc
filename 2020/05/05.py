# heuheuhuehueuhehue

def prepare_input():
    input_file = open("input.txt", "r")
    output = []

    for value in input_file:
        row = int(value[:-4].replace("F", "0").replace("B", "1"), 2)
        column = int(value[-4:][:-1].replace("L", "0").replace("R", "1"), 2)

        output.append((row * 8) + column)

    input_file.close()
    return output


def main():
    prepared_input = prepare_input()
    prepared_input.sort()

    print("Day 05 *  - answer: {}".format(prepared_input[len(prepared_input)-1]))
    # print("Day 05 ** - answer: {}".format())

    for index in range(1, len(prepared_input)-1):
        cur = int(prepared_input[index])
        prev = int(prepared_input[index-1])
        next = int(prepared_input[index+1])

        if (not (prev + 1 == cur and next - 1 == cur)):
            print("**", cur)

if __name__ == "__main__":
    main()
