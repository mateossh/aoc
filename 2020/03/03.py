# hahahahiahihiehie

def tree_count():
    input_file = open("input.txt", "r")
    trees_count = 0

    for index, line in enumerate(input_file):
        line = line[:-1] # remove newline char

        if line[0 + (index * 3) % 31] == '#':
            trees_count += 1

    return trees_count


def main():
    result = tree_count()
    print("Day 03, answer - {}".format(result))


if __name__ == "__main__":
    main()
