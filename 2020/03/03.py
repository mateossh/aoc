# hahahahiahihiehie

def tree_count(right_step, vertical_step=None):
    input_file = open("input.txt", "r")
    trees_count = 0

    for index, line in enumerate(input_file):
        line = line[:-1] # remove newline char

        if vertical_step == None:
            if line[0 + (index * right_step) % 31] == '#':
                trees_count += 1
        elif index % vertical_step == 0:
            if line[0 + (index * right_step) % 31] == '#':
                trees_count += 1

    input_file.close()
    return trees_count


def multiply_arr(arr):
    result = 1
    for a in arr:
        result *= a

    return result


def main():
    result = tree_count(3)

    results2 = [
        tree_count(1),
        tree_count(3),
        tree_count(5),
        tree_count(7),
        tree_count(1, 2),
    ]

    print("Day 03 *  - answer - {}".format(result))
    print("Day 03 ** - answer - {}".format(multiply_arr(results2)))


if __name__ == "__main__":
    main()
