# heheh

# opens file and returns array with values parsed as ints
def prepare_input():
    input_file = open("input", "r")
    output = []

    for value in input_file:
        output.append(int(value))

    input_file.close()
    return output


# provide array of ints
#
# returns array with entries when successful
# or empty array if something went wrong
def find_entries_1(array):
    for v1 in array:
        for v2 in array:
            if (v1+v2 == 2020):
                return [v1, v2]

    return []


# provide array of ints
#
# returns array with entries when successful
# or empty array if something went wrong
def find_entries_2(array):
    for v1 in array:
        for v2 in array:
            for v3 in array:
                if (v1+v2+v3 == 2020):
                    return [v1, v2, v3]

    return []


def main():
    prepared_input = prepare_input()
    entries_1 = find_entries_1(prepared_input)
    entries_2 = find_entries_2(prepared_input)

    multiplied_entries_1 = entries_1[0] * entries_1[1] if len(entries_1) > 0 else int(-1)
    multiplied_entries_2 = entries_2[0] * entries_2[1] * entries_2[2] if len(entries_2) > 0 else int(-1)
    print("Day 01 *  - correct answer: {}".format(multiplied_entries_1))
    print("Day 01 ** - correct answer: {}".format(multiplied_entries_2))


if __name__ == "__main__":
    main()
