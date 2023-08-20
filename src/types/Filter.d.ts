type FilterType = 'role' | 'level' | 'language' | 'tool';

interface Filter {
    name :string;
    type: FilterType;
}
